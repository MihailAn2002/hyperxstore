import React from "react";
import c from './contactform.module.css'
import contacs from './contactimg/support.webp'

const Contactsform = () => {
    return (
        <div>
            <div >
                <img className={c.img} src={contacs} alt="contact" />
            </div>

            <div >
                <div className="line">
                    <b>СВЯЗАТЬСЯ С НАМИ</b>
                </div>
                <div className={c.container}>
                    <div>
                        <p> <a href="https://wa.me/+77014141414">Whatsapp</a></p>
                        <p>Мы свяжемся с вами <br/> в рабочее время <br/> с 10:00 - 18:00</p>
                    </div>
                    <div>
                        <p> <a href="https://instagram.com/hypexstore.kz?igshid=MzNlNGNkZWQ4Mg==">Insagram</a></p>
                        <p>Наши товары HyperX  <br/> в instagram</p>
                    </div>
                    <div>
                        <p> <a href="tel:+77014141414;">+77014141414</a></p>
                        <p>Номер горячей линии <br/>с 10:00 - 18:00 </p>
                    </div>
                    <div>
                        <p> <span>sales@hyperxstore.kz</span></p>
                        <p>Наша рабочая  <br/>почта </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactsform;