import React, { useState, useEffect } from "react";
import axios from "axios";
import c from "./adminpanel.module.css";

const Adminpanel = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch the orders from the backend when the component mounts
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("https://195.49.210.249:5000/api/orders");
      const data = response.data; // Access the 'data' property of the response object
      setOrders(data); // Set the fetched data (array of orders) into the 'orders' state
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleDeleteOrder = async (orderNumber) => {
    try {
      // Отправляем DELETE-запрос на сервер, чтобы удалить заказ по orderNumber
      await axios.delete(`https://195.49.210.249:5000/api/orders/${orderNumber}`);
      // Обновляем состояние 'orders', удаляя удаленный заказ из массива
      setOrders((prevOrders) => {
        const updatedOrders = prevOrders.filter((order) => order.orderNumber !== orderNumber);
        return updatedOrders;
      });
    } catch (error) {
      console.error("Ошибка при удалении заказа:", error);
    }
  };

  return (
    <div className={c.m}>
      <ul className={c.position}>
        {Array.isArray(orders) && orders.length > 0 ? (
          orders.map((order, index) => (
            <li className={c.box} key={order._id}>
              <p>Номер заказа: {order.orderNumber}</p>
              <p>Имя: {order.nameInput}</p>
              <p>Фамилия: {order.lastName}</p>
              <p>Телефон: {order.phone}</p>
              <p>Адрес: {order.address}</p>
              <p>Город: {order.city}</p>
              <p>Комментарий: {order.comment}</p>
              <ul className={c.product}>
                {Array.isArray(order.product) && order.product.length > 0 ? (
                  order.product.map((product, productIndex) => (
                    <li key={product._id}>
                      <p>{product.name}</p>
                      <p>Артикул: {product.article}</p>
                      <p>Цена: {product.price2}</p>
                      <p>Количество: {product.quantity}</p>
                      <p>__________________</p>
                    </li>
                  ))
                ) : (
                  <li>Товаров нет</li>
                )}
              </ul>
              <p className={c.sum}>Общая сумма товара: {order.sum}</p>
              <button
        className={c.btn}
        onClick={() => handleDeleteOrder(order.orderNumber)} // Передаем ID заказа и индекс
      >
        Удалить заказ
      </button>
            </li>
          ))
        ) : (
          <li>Заказов нет</li>
        )}
      </ul>
    </div>
  );
};

export default Adminpanel;
