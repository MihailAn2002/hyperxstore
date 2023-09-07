import React from "react";
import c from './shopright.module.css'
import { NavLink } from "react-router-dom";

import categories1 from './imgforshop/HyperX1.webp'
import keyboard from './imgforshop/keyboard.webp'
import microphone from './imgforshop/microphone.webp'
import monitors from './imgforshop/monitors.webp'
import mouse from './imgforshop/mouse.webp'
import mousepads from './imgforshop/mousepads.webp'
import accesuars from './imgforshop/accesuars.jpg'

const Shopright = () => {
    return (
        <div className={c.position}>
            <div className="line">
                    <b>КАТЕГОРИИ ТОВАРОВ</b>
                </div>
            <div className={c.shop_pos}>
                <div className={c.shopright}>

                    <div className={c.shop}>
                        <div>
                            <img src={mouse} alt="mouse" />
                            <div>
                                <NavLink to="/shop/mouse"><button>Мышки</button></NavLink>
                            </div>
                        </div>

                        <div>
                            <img src={microphone} alt="mouse" />
                            <div>
                                <NavLink to="/shop/microphones"><button>Микрофоны</button></NavLink>
                            </div>
                        </div>

                        <div>
                            <img src={mousepads} alt="mouse" />
                            <div>
                                <NavLink to="/shop/mousepads"><button>Коврики для мышки</button></NavLink>
                            </div>
                        </div>

                    </div>

                    <div className={c.shop}>
                        <div>
                            <img src={keyboard} alt="mouse" />
                            <div>
                                <NavLink to="/shop/keyboard"><button>Клавиатуры</button></NavLink>
                            </div>
                        </div>

                        <div>
                            <img src={accesuars} alt="mouse" />
                            <div>
                                <NavLink to="/shop/accessories"><button>Акссесуары</button></NavLink>
                            </div>
                        </div>


                    </div>

                    <div className={`${c.shop} ${c.shop_w} `}>

                        <div>
                            <img src={monitors} alt="mouse" />
                            <div>
                                <NavLink to="/shop/monitors"><button>Мониторы</button></NavLink>
                            </div>
                        </div>

                        <div>
                            <img src={categories1} alt="mouse" />
                            <div>
                                <NavLink to="/shop/headphones"><button>Наушники</button></NavLink>
                            </div>
                        </div>


                    </div>

                </div>
            </div>

        </div>
    )
}

export default Shopright;

