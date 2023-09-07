import React from "react";
import Shopleft from "./shopleft/shopleft";
import Filter from "./filter/filter";


const Mousepads = () => {
  const categories = [3786];

  return (
    <div>
      <Shopleft />

      <div className="line">
        <b>КОВРИКИ ДЛЯ МЫШКИ</b>
      </div>



      <div>
          <div>
            <Filter categories={categories} />
          </div>
        </div>

    </div>
  );
};

export default Mousepads;