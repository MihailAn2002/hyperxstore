import React, { useState, useEffect, useContext } from "react";
import ProductList from "../../../productdata/productdata";
import c from "./filter.module.css";
import { Link } from "react-router-dom";
import { transliterate } from "transliteration";
import { CartContext } from "../../../../header/navbarmenu/cartcontext";

const Filter = ({ categories }) => {
  const [filterState, setFilterState] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const { addItemToCart } = useContext(CartContext);

  const addToCart = (name, price2, article) => {
    addItemToCart({ name, price2, article });
    setFilteredData((prevData) =>
      prevData.map((item) =>
        item.article === article ? { ...item, isAddedToCart: true } : item
      )
    );

    setTimeout(() => {
      setFilteredData((prevData) =>
        prevData.map((item) =>
          item.article === article ? { ...item, isAddedToCart: false } : item
        )
      );
    }, 1000);
  };

  useEffect(() => {
    const filteredItems = filterState.filter((item) => {
      return categories.includes(item.category);
    }); 


    setFilteredData(filteredItems);
  }, [filterState, categories]);

  const categoryMapping = {
    3779: "Мышки",
    3778: "Клавиатуры",
    5649: "Мониторы",
    5668: "Мониторы / Aкссесуары",
    3654: "Микрофоны",
    4963: "Микрофоны / Акссесуары",
    5678: "Наушники / Гарнитуры",
    3650: "Наушники ",
    3651: "Наушники ",
    3652: "Наушники / Гарнитуры",
    3786: "Коврики для мышки",
    21174: "Акссесуары",
  }

  return (
    <div className={c.box_cart}>
      <div className={c.list_cart}>
        {filteredData &&
          filteredData.map((item) => (
            <div key={item.article}>
              <div className={c.cart}>

                <Link to={`/cart/${encodeURIComponent(transliterate(item.name))}/${item.article}`}>
                  <div className={c.cart_box}>
                    <div className={c.box_images}>
                      {item.images && item.images.length > 0 && <img src={item.images[0]} alt={item.name} />}
                    </div>
                    <div className={c.name}>{item.name}</div>
                    <p>цена : {item.price2}</p>
                    <p>{categoryMapping[item.category] || item.category}</p>
                    <p>Артикул : {item.article}</p>
                  </div>
                </Link>
                <button className={c.btn}
                  onClick={() =>
                    addToCart(item.name, item.price2, item.article)
                  }>
                  {item.isAddedToCart ? "Товар добавлен" : "Добавить в корзину"}
                </button>
              </div>
            </div>
          ))}
        <ProductList setDataState={setFilterState} />
      </div>
    </div>
  );
};

export default Filter;
