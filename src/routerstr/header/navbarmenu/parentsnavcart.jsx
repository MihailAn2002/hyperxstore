import React, { useContext} from "react";
import { CartContext } from "./cartcontext";
import c from "./parentcomponent.module.css"

const ParentComponent = () => {
  const { orderItems, removeItemFromCart} = useContext(CartContext);


  return (
    
        <ul>
          {orderItems && orderItems.length > 0 ? (
            orderItems.map((item, index) => (
              <li key={index}>
                <p>{item.name} / Цена : {item.price2} , Артикул : {item.article} / <span className={c.span}>Количество - {item.quantity}</span></p>
                <button
                  onClick={() => removeItemFromCart(index)}
                >
                  Удалить
                </button>
              </li>
            ))
          ) : (
            <li className={c.li}>Ваша корзина пустая</li>
          )}
        </ul>
  );
};

export default ParentComponent;
