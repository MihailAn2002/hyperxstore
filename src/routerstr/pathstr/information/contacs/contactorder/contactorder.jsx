import React, { useState } from "react";
import c from "./contactorder.module.css";
import axios from "axios";

const Contactsorder = () => {
  const [nameInput, setNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [commentInput, setCommentInput] = useState("");
  const [statusContact, setStatusContact] = useState("");

  const bearerToken = "51ec16e1fb32a7a1f254ab4219207ee2f509fe94";

  const sendAppeal = async () => {

    if (nameInput === "" || (/\d/.test(nameInput))) {
      setStatusContact("Ваше имя !");
    } else if (phoneInput === "" || (!/^\d+$/.test(phoneInput))) {
      setStatusContact("Ваш номер телефона !");
    } else if (emailInput === "") {
      setStatusContact("Ваша почта !");
    } else if (commentInput === "") {
      setStatusContact("Ваше обращение !");
    } else {
      
      try {  
        await axios.post(
        "/api/remap/1.2/entity/customerorder",
        {
          organization: {
            meta: {
              href: "https://online.moysklad.ru/api/remap/1.2/entity/organization/6421ab78-e40b-11ed-0a80-02cb0008f744",
              type: "organization",
              mediaType: "application/json",
            },
          },
          agent: {
            meta: {
              href: "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/0ddedbf7-f962-11ed-0a80-0274000847bb",
              type: "counterparty",
              mediaType: "application/json",
            },
          },
          shipmentAddressFull: {
            comment: `Имя : ${nameInput} ,  Номер : ${phoneInput} , email : ${emailInput} , Комментарий : ${commentInput}`,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      setNameInput("");
      setPhoneInput("");
      setEmailInput("");
      setCommentInput("");
      setStatusContact("Спасибо за обращение мы с вами свяжемся !");
    }catch (error) {
      setStatusContact("Свяжитесь с нами через соц сети или позвоните на номер!");
    } 
  } 
  };

  return (
    <div>
      <div className="line">
        <b>ОФОРМИТЬ ЗАЯВКУ</b>
      </div>
      <div className={c.block}>
        <div>
          <p className={c.p}>
            Оставьте ваше обращение мы обязательно с вами свяжемся в рабочее
            время с 10:00 - 18:00 .
          </p>
        </div>
        <div>
          <div className={c.order}>
            <p>Введите ваше имя :</p>
            <input
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              required // Add required attribute
              placeholder="Ваше имя"
              type="text"
            />
            <p>Введите ваш номер :</p>
            <input
              value={phoneInput}
              onChange={(e) => setPhoneInput(e.target.value)}
              required // Add required attribute
              placeholder="Телефон"
              type="text"
            />
            <p>Введите почту :</p>
            <input
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              required // Add required attribute
              placeholder="Email : почта"
              type="text"
            />
            <p>Введите ваше обращение :</p>
            <textarea
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
            ></textarea>
            <button
              onClick={() => {
                sendAppeal();
              }}
              className={c.btn}
            >
              Отправить
            </button>
            <div 
            className={`${c.comment} ${statusContact ? 
            (setStatusContact === 'Спасибо за обращение мы с вами свяжемся !' ? c.greenText : c.redText) : ""}`}>
            {statusContact}
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactsorder;
