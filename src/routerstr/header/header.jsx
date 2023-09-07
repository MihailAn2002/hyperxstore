import React from "react";
import c from "./header.module.css";
import Navbar from "./navbarmenu/navbar.jsx";
import Headertop from "./headertop/headertop.jsx";

const Header = () => {
  return (
    <div>
      <div className={c.headerfix}>
        <div className={c.header_relative}>
          <Headertop />
          <Navbar />
          
        </div>
      </div>
      <div className={c.botmargin}></div>
    </div>
  );
};

export default Header;
