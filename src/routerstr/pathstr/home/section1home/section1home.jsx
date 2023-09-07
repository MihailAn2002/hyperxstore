import React from "react";
import c from './section1home.module.css'
import hyperxhome from './img/fon2-1536x720.jpg'
import Slider from "./slider";
import { NavLink } from "react-router-dom";

const Section1_home = () => {
    return (
        <div>
            <div className={c.hyperxtop}>
                <div className={c.overlay}></div>
                <img src={hyperxhome} alt="hyperximages" />
            </div>
            <div className={c.section_1}>
                <div className={c.section_left}>
                    <div>
                        <ul className={c.item}>
                            <li className={c.item1}>Категории :</li>
                            <li><NavLink to="/shop/mouse">Мышки</NavLink></li>
                            <li><NavLink to="/shop/keyboard">Клавиатуры</NavLink></li>
                            <li><NavLink to="/shop/monitors">Мониторы</NavLink></li>
                            <li><NavLink to="/shop/microphones">Микрофоны</NavLink></li>
                            <li><NavLink to="/shop/accessories">Акссесуары</NavLink></li>
                            <li><NavLink to="/shop/headphones">Наушники / Гарнитуры</NavLink></li>
                            <li><NavLink to="/shop/mousepads">Коврики для мышки</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className={c.section_right}>
                  <Slider/>
                </div>
            </div>
        </div>
    )
}

export default Section1_home;
