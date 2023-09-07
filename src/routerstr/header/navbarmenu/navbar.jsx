import React, { useState } from "react";
import c from "./navbar.module.css";
import Logo from "../../HyperX-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import ParentComponent from "./parentsnavcart";

import { HiOutlineSearch } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [cardOpen, setCardOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState(""); // Добавляем состояние searchTerm
  const navigate = useNavigate();
  
  const handleCardToggle = () => {
    setCardOpen(!cardOpen);
  };

  const handleSearchChange = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
  };
  const handleSearchIconClick = () => {
    // Переход на страницу товаров с поисковым запросом (searchTerm)
    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div>
      
      <div className={c.nav_color}>
        <div className={c.navbar}>
          <div>
            <NavLink to="/">
              <img className={c.logo} src={Logo} alt="Logo" />
            </NavLink>
          </div>
          
          <div className={c.search}>
            <div>
              <input
                placeholder="Поиск"
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>

            <div>
              <HiOutlineSearch
                onClick={handleSearchIconClick}
                className={c.btnsearch}
              />
            </div>

          </div>
          
          <div className={c.burger_menu}>
            <RxHamburgerMenu className={c.burger} />

            <div className={c.media}>
              <ul className={c.menu}>
                <li>
                  <span className={c.span_menu}>
                    <p>Категории</p>
                    <ul className={c.ul_menu}>
                      <li>
                        <NavLink to="/shop/mouse">Мышки</NavLink>
                      </li>
                      <li>
                        <NavLink to="/shop/keyboard">Клавиатуры</NavLink>
                      </li>
                      <li>
                        <NavLink to="/shop/monitors">Мониторы</NavLink>
                      </li>
                      <li>
                        <NavLink to="/shop/microphones">Микрофоны</NavLink>
                      </li>
                      <li>
                        <NavLink to="/shop/accessories">Акссесуары</NavLink>
                      </li>
                      <li>
                        <NavLink to="/shop/headphones">Наушники</NavLink>
                      </li>
                      <li>
                        <NavLink to="/shop/mousepads">
                          Коврики для мышки
                        </NavLink>
                      </li>
                    </ul>
                  </span>
                </li>
                <li className={c.navlink}>
                  <NavLink to="/shop">Каталог</NavLink>
                </li>
                <li>
                  <span className={c.span_menu}>
                    <p>Информация</p>
                    <ul className={c.ul_menu}>
                      <li>
                        <NavLink to="/aboutus">О нас</NavLink>
                      </li>
                      <li>
                        <NavLink to="/paymentorder">Доставка / Оплата</NavLink>
                      </li>
                      <li>
                        <NavLink to="/installmentplan">Рассрочка</NavLink>
                      </li>
                    </ul>
                  </span>
                </li>
                <li className={c.navlink}>
                  <NavLink to="/contacs">Контакты</NavLink>
                </li>
              </ul>
            </div>
           
          
          </div>
          <div onClick={handleCardToggle}
              className={`${c.card} ${cardOpen ? c.card_open : ""}`}>
            <FaShoppingCart
            />
          <div className={c.cardNext}>
            {cardOpen && (
              <div className={c.shop_card}>
                <div className={c.navbar_basket}>
                  <ParentComponent />
                </div>
                <NavLink to="/shopingcart">
                  <button className={c.btn}>Оформить заказ</button>
                </NavLink>
              </div>
            )}
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
