import React from "react";
import c from './footer.module.css'
import Logo from '../HyperX-logo.png'
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
      <div>
        <div className={c.footer}>
          <div className={c.footer_section}>
            <div className={c.box_logo}>
              <div>Магазин HyperX техники</div>
              <div>
                <NavLink to="/">
                  <img className={c.logo} src={Logo} alt="Logo" />
                </NavLink>
              </div>
            </div>
            <div className={c.navigation}>
              <span>Информация</span>
              <ul>
                <li>
                  <NavLink to="/aboutus">О нас</NavLink>
                </li>
                <li>
                  <NavLink to="/paymentorder">Доставка / Оплата</NavLink>
                </li>
                <li>
                  <NavLink to="/contacs">Контакты</NavLink>
                </li>
                <li>
                  <NavLink to="/installmentplan">Рассрочка</NavLink>
                </li>
                <li>
                  <NavLink to="/shop">Каталог</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={c.footer_bottom}>
          Магазин геймерских девайсов HyperX в Казахстане
        </div>
      </div>
    );
}

export default Footer;