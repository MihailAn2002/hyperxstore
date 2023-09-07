import React, { useContext, useEffect, useState } from "react";
import c from "./section3home.module.css";
import ProductList from "../../productdata/productdata";
import { Link } from "react-router-dom";
import { CartContext } from "../../../header/navbarmenu/cartcontext";


const Section3_home = () => {
  const [dataState, setDataState] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [product_position, setProductPosition] = useState(0);
  const [randomProducts, setRandomProducts] = useState([]);
  const { addItemToCart } = useContext(CartContext);
 
  
  const addToCart = (name, price2, article) => {
    addItemToCart({ name, price2, article });

    // Set the isAddedToCart property to true for the clicked product
    setRandomProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.article === article ? { ...product, isAddedToCart: true } : product
      )
    );

    setTimeout(() => {
      // Revert back the isAddedToCart property to false after 3 seconds
      setRandomProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.article === article ? { ...product, isAddedToCart: false } : product
        )
      );
    }, 1000);
  };

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setDataState(JSON.parse(savedCartItems));
    }
  }, []);

  const handleNext = () => {
    if (currentIndex < randomProducts.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setProductPosition(product_position - 345);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setProductPosition(product_position + 345);
    }
  };

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
  };
  useEffect(() => {
    // Function to randomly select 10 products from dataState
    const getRandomProducts = (dataState, count) => {
      const shuffledProducts = dataState.sort(() => 0.5 - Math.random());
      const randomProducts = shuffledProducts.slice(0, count).map((product) => ({
        ...product,
        isAddedToCart: false, // Initialize the isAddedToCart property to false for all products
      }));
      return randomProducts;
    };

    // Randomly select 10 products from dataState
    const randomProducts = getRandomProducts(dataState, 10);
    setRandomProducts(randomProducts);
  }, [dataState]);

   useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setDataState(JSON.parse(savedCartItems));
    }
  }, []);

  return (
    <div>
      
      <div className={c.display}>
      
        <div
          className={c.product_position}
          style={{ transform: `translateX(${product_position}px)` }}
        >
          {dataState &&
            randomProducts.map((item, index) => (
              <div
                key={item.article}
                className={index === currentIndex ? c.active : ""}
              >
                <div className={c.product}>
                  <Link to={`/cart/${item.category}/${item.article}`}>
                    <div className={c.product_list}>
                      {item.images && item.images.length > 0 && (
                        <img src={item.images[0]} alt={item.name} />
                      )}
                      <p>Цена: {item.price2}</p>
                      <p>
                        {categoryMapping[item.category] || item.category}
                      </p>
                      <p>Артикул: {item.article}</p>
                    </div>
                  </Link>
                  <button
                    className={c.btn}
                    onClick={() =>
                      addToCart(item.name, item.price2, item.article)
                    }
                  >
                    {item.isAddedToCart ? "Товар добавлен" : "Добавить в корзину"}
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div className={c.btn1}>
          <div onClick={handlePrev} disabled={currentIndex === 0}>
            &lt;
          </div>
          <div
            onClick={handleNext}
            disabled={currentIndex === (dataState && dataState.length - 1)}
          >
            &gt;
          </div>
        </div>
      </div>

      <ProductList setDataState={setDataState} />
    </div>
  );
};

export default Section3_home;
