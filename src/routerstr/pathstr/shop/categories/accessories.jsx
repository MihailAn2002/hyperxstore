import React from "react";
import Shopleft from "./shopleft/shopleft";
import Filter from "./filter/filter";

const Accessories = () => {
  const categories = [5668 , 4963 , 21174];

  return (
    <div>

      <Shopleft  />

      <div className="line">
        <b>АКССЕСУАРЫ</b>
      </div>
        <div>
          <div>
            <Filter categories={categories}/>
          </div>
        </div>
    </div>
  );
};

export default Accessories;
