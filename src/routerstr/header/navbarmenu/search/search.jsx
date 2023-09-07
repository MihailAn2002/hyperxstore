import React, { useState } from "react";
import c from "./search.module.css";
import { NavLink, useLocation } from "react-router-dom";
import ProductList from "../../../pathstr/productdata/productdata";
import { transliterate } from "transliteration";

const Search = () => {
  const [resultSearch, setResultSearch] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query") || "";

  // Передаем данные о продуктах из компонента ProductList
  const handleDataStateChange = (data) => {
    setResultSearch(data);
  };

  // Фильтрация результатов поиска на основе имени продукта (name)
  const filteredResults = searchQuery
    ? resultSearch.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className={c.m}>
      <h2>Результаты поиска для: {searchQuery}</h2>

      {filteredResults.length > 0 ? (
        <ul className={c.box_list}>
          {filteredResults.map((product) => (
            <div className={c.box} key={product.article}>
              <li >
                <NavLink to={`/cart/${encodeURIComponent(transliterate(product.name))}/${product.article}`}>
                {product.images && product.images.length > 0 && (
                        <img src={product.images[0]} alt={product.name} />
                      )}
              <p>{product.name}</p>
              <p>Цена: {product.price2}</p>
              <p>Артикул: {product.article}</p>
              <p>Категория: {product.category}</p>
            </NavLink>
            </li>
            </div>
          ))}
        </ul>
      ) : (
        <p>Товар не найден</p>
      )}
      {/* Передаем функцию handleDataStateChange в компонент ProductList */}
      <ProductList setDataState={handleDataStateChange} />
    </div>
  );
};

export default Search;
