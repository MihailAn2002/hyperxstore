import React from "react";
import c from './section2home.module.css'
import cat1 from './img/categori1.webp'
import cat2 from './img/categori2.webp'
import cat3 from './img/categori3.webp'
import cat4 from './img/categori4.webp'
import cat5 from './img/categori5.webp'
import { NavLink } from "react-router-dom";

const Section2_home = () => {
    return (
        <div>
            <div className={c.section_2}>
                <div className="line">
                    <b>КАТЕГОРИИ ТОВАРОВ</b>
                </div>
                <div className={c.display_flex_inline}>
                    <div className={c.katalog}>

                        <div>
                            <div className={c.cart}>
                                <img src={cat1} alt="Наушники" />
                            </div>
                            <div className={c.item}><NavLink to="/shop/headphones"><button className={c.btn}>Наушники</button></NavLink></div>
                        </div>

                        <div>
                            <div className={c.cart}>
                                <img src={cat2} alt="Микрофон" />
                            </div>
                            <div className={c.item}><NavLink to="/shop/microphones"><button className={c.btn}>Микрофоны</button></NavLink></div>
                        </div>

                        <div>
                            <div className={c.cart}>
                                <img src={cat3} alt="Клавиатура" />
                            </div>
                            <div className={c.item}><NavLink to="/shop/keyboard"><button className={c.btn}>Клавиатуры</button></NavLink></div>
                        </div>

                        <div>
                            <div className={c.cart}>
                                <img src={cat4} alt="Монитор" />

                            </div>
                            <div className={c.item}><NavLink to="/shop/monitors"><button className={c.btn}>Мониторы</button></NavLink></div>
                        </div>

                        <div>
                            <div className={c.cart}>

                                <img src={cat5} alt="Мышка" />
                            </div>
                            <div className={c.item}><NavLink to="/shop/mouse"><button className={c.btn}>Мышки</button></NavLink></div>
                        </div>

                    </div>
                </div>
                <div className="line">
                    <b>ХИТЫ ПРОДАЖ</b>
                </div>
            </div>
        </div>
    )
}

export default Section2_home;
