import React from "react";
import Shopleft from "./shopleft/shopleft";
import Filter from "./filter/filter";


const Microphones = () => {
  const categories = [3654 , 4963];

  return (
    <div>
      <Shopleft />

      <div className="line">
        <b>МИКРОФОНЫ</b>
      </div>


     
      <div>
          <div>
            <Filter categories={categories} />
          </div>
        </div>
      
    </div>
  );
};

export default Microphones;