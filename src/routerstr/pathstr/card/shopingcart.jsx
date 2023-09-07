import React, { useContext,useEffect,useState } from "react";
import c from "./shopingcart.module.css";
import ParentComponent from "../../header/navbarmenu/parentsnavcart";
import { CartContext } from "../../header/navbarmenu/cartcontext";
import axios from "axios";



const Shopingcart = () => {

  const [nameIn , setNameIn] = useState('')
  const [firstNames , setFirstName] = useState('')
  const [phone , setPhone] = useState('')
  const [streets , setStreet] = useState('')
  const [city , setCity] = useState('')
  const [comment , setComment] = useState('')
 
  
  const [sum , setSum] = useState(0)

  const { orderItems , clearCart } = useContext(CartContext);


  useEffect(() => {
    let calculatedSum = 0;
  
    for (let s = 0; s < orderItems.length; s++) {
      calculatedSum += orderItems[s].price2;
    }
  
    setSum(calculatedSum);
  }, [orderItems]);
  
  // Все о запросе 


  const sendOrder = async () => {

    const article = orderItems.map(orderItems => orderItems.article)
    const quantity = orderItems.map(orderItems => orderItems.article)
    const price = orderItems.map(orderItems => orderItems.article * 100)
    console.log(article)
    console.log(quantity)
    console.log(`${price}`)
    try{

      const dataOrder = {
        "firstName" : `${nameIn}`,
        "lastName" : `${firstNames}`,
        "phone" : `${phone}`,
        "street" : `${streets}`,
        "comment": `${comment}`,
        "article": `${article} `,
        "quantity": `${quantity}`,
        "price": `${price}`
      }
      const sendO = await axios.post('http://localhost:8080/products', dataOrder
      
      )
      sendO()
      clearCart()
      console.log('Успешно отправился')
    }catch(error){
      console.log('Не удалось отправить error')
    }

  } 

  

  return (
    <div className={c.m}>
      <div className={c.box_left}>
        <div className={c.box}>
          
          <div className={c.last_first_name}>
            <div>
              <p><span className={c.spano}>* </span>Имя</p>
              <input
                placeholder="имя"
                type="text"
                value={nameIn}
                onChange={(e) => setNameIn(e.target.value)}
              />
            </div>
            <div>
              <p><span className={c.spano}>* </span>Фамилия</p>
              <input
                placeholder="фамилия"
                type="text"
                value={firstNames}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <p><span className={c.spano}> * </span> Телефон</p>
            <input
              placeholder="Телефон"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              />
            <p><span className={c.spano}> * </span> Адрес</p>
            <input
              placeholder="Номер дома улица"
              type="text"
              value={streets}
              onChange={(e) => setStreet(e.target.value)}
            />
            <p><span className={c.spano}> * </span> Населеный пункт</p>
            <input
              placeholder="Город "
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <p>Комментарий</p>
            <textarea
              placeholder="Не обязательно"
              cols="40"
              rows="7"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={c.box_right}>
        <div className={c.basket}>
          <ParentComponent orderItems={orderItems} />
        </div>
        <div className={c.ordersum}>Заказ на сумму : {sum}</div>
        <button onClick={sendOrder}>Оформить заказ</button>
        <div className={c.order_ready}></div>
      </div>
    </div>
  );
};

export default Shopingcart;
