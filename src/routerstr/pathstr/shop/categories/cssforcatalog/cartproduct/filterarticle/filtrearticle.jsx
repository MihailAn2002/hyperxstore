import React, { useState, useEffect, useContext } from "react";
import c from "./filterarticle.module.css";
import ProductList from "../../../../../productdata/productdata";
import { CartContext } from "../../../../../../header/navbarmenu/cartcontext";

const Filterarticle = ({ article }) => {
  const [filterState, setFilterState] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const defaultImageIndex = 0;

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
      return article.includes(item.article);
    });

    setFilteredData(filteredItems);
  }, [filterState, article]);
  const categoryMapping = {
    3779: "мышки",
    3778: "клавиатуры",
    5649: "мониторы",
    5668: "мониторы / Aкссесуары",
    3654: "микрофоны",
    4963: "микрофоны / Акссесуары",
    5678: "наушники / Гарнитуры",
    3650: "наушники ",
    3651: "наушники ",
    3652: "наушники / Гарнитуры",
    3786: "коврики для мышки",
    21174: "Акссесуары",
  };
  return (
    <div>
      <div>
        {filteredData &&
          filteredData.map((item) => (
            <div key={item.article}>
              <div>
                <p className={c.name}>{item.name}</p>
                <div className={c.box}>
                  <div className={c.box_left}>
                    <div className={c.left_item_img}>
                      <div
                        onClick={() => setCurrentImageIndex(defaultImageIndex)}
                      >
                        {item.images &&
                          item.images.length > defaultImageIndex && (
                            <img
                              src={item.images[defaultImageIndex]}
                              alt={item.name}
                            />
                          )}
                      </div>
                      <div onClick={() => setCurrentImageIndex(1)}>
                        {item.images && item.images.length > 1 && (
                          <img src={item.images[1]} alt={item.name} />
                        )}
                      </div>
                      <div onClick={() => setCurrentImageIndex(2)}>
                        {item.images && item.images.length > 2 && (
                          <img src={item.images[2]} alt={item.name} />
                        )}
                      </div>
                    </div>

                    <div className={c.img}>
                      <div>
                        {item.images &&
                          item.images.length > currentImageIndex && (
                            <img
                              src={item.images[currentImageIndex]}
                              alt={item.name}
                            />
                          )}
                      </div>
                    </div>
                  </div>

                  <div className={c.box_right}>
                    <p className={c.name_2}>{item.name}</p>
                    <p>Цена : {item.price2} KZT</p>
                    <p>
                      Категория :{" "}
                      {categoryMapping[item.category] || item.category}
                    </p>
                    <p>Артикул : {item.article}</p>
                    <button
                      onClick={() =>
                        addToCart(item.name, item.price2, item.article)
                      }
                    >
                      {item.isAddedToCart ? "Товар добавлен" : "Добавить в корзину"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        <ProductList setDataState={setFilterState} />
      </div>
    </div>
  );
};

export default Filterarticle;
