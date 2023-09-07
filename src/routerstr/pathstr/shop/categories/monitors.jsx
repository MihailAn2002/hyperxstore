import React from "react";
import Shopleft from "./shopleft/shopleft";
import Filter from "./filter/filter";

const Monitors = () => {
  const categories = [5649 , 5668];

  return (
    <div>
      <Shopleft/>

      <div className="line">
        <b>МОНИТОРЫ</b>
      </div>


   
      <div>
          <div>
            <Filter categories={categories} />
          </div>
        </div>
   
    </div>
  );
};

export default Monitors;