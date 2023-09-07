import React from "react";
import c from "./headertop.module.css";
import {BsWhatsapp} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"


const Headertop = () => {
    return (
      <div>
        <header className={c.header}>
          <div className={c.left}>
            <div>
              <a href="https://instagram.com/hypexstore.kz?igshid=MzNlNGNkZWQ4Mg=="><BsInstagram/></a>
            </div>
            <div>
              <a href="https://wa.me/+77014141414"><BsWhatsapp/></a>
            </div>
          </div>
          <div>Магазин геймерских девайсов в Казахстане</div>
          <div>
            <div className={c.a_border}>
              <a  href="tel:+77014141414;"><span >+77014141414</span></a>
            </div>
          </div>
        </header>
      </div>
    );
};

export default Headertop;
