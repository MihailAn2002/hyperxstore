import React from "react";
import Shopleft from "./shopleft/shopleft";
import Filter from "./filter/filter";

const Mouse = () => {
  const categories = [3779];

  return (
    <div>
      <Shopleft/>

      <div className="line">
        <b>МЫШКИ</b>
      </div>


 
      <div>
          <div>
            <Filter categories={categories} />
          </div>
        </div>
     
    </div>
  );
};

export default Mouse;
