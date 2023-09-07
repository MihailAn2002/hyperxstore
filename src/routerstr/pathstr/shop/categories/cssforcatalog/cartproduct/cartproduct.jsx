import React from "react";
import c from "./cartproduct.module.css";
import Carttop from "./carttop/carttop";

const Cartproduct = () => {


  return (
    <div className={c.m}>
      <div>
        <div>
          <Carttop/>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Cartproduct;
