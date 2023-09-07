import React from "react";
import c from './shopleft.module.css'
import { NavLink } from "react-router-dom";

const Shopleft = () => {

    return (
        <div>
            <div className={c.fix}>
                
                <ul>
                    <div >
                        <div className={c.navigation}>Навигация</div>
                    </div>
                    <li><NavLink to="/shop/mouse">Мышки</NavLink></li>
                    <li><NavLink to="/shop/keyboard">Клавиатуры</NavLink></li>
                    <li><NavLink to="/shop/monitors">Мониторы</NavLink></li>
                    <li><NavLink to="/shop/microphones">Микрофоны</NavLink></li>
                    <li><NavLink to="/shop/accessories">Акссесуары</NavLink></li>
                    <li><NavLink to="/shop/headphones">Наушники</NavLink></li>
                    <li><NavLink to="/shop/mousepads">Коврики для мышки</NavLink></li>

                </ul>

            </div>
        </div>
    )
}

export default Shopleft;