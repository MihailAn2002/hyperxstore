import React from "react";
import Shopleft from "./shopleft/shopleft";
import Filter from "./filter/filter";

const Keyboard = () => {
  const categories = [3778];

  return (
    <div>
      <Shopleft/>

      <div className="line">
        <b>КЛАВИАТУРЫ</b>
      </div>


   
      <div>
          <div>
            <Filter categories={categories} />
          </div>
     
      </div>
    </div>
  );
};

export default Keyboard;
