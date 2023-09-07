import React from "react";
import Shopleft from "./shopleft/shopleft";
import Filter from "./filter/filter";


const Headphones = () => {
  const categories = [3650, 3651, 3652];

  return (
    <div>
      <Shopleft />

      <div className="line">
        <b>НАУШНИКИ / ГАРНИТУРЫ</b>
      </div>
        <div>
          <div>
            <Filter categories={categories} />
          </div>
        </div>
    </div>
  );
};

export default Headphones;
