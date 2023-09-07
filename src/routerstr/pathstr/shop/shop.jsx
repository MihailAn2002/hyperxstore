import React from "react";
import Shopleft from "./categories/shopleft/shopleft";
import Shopright from "./categories/shopright/shopright";

const Shop = () => {
  return (
    <div>
      <div>
        <div>
          <Shopleft />
        </div>
        <div>
          <Shopright/>

        </div>
      </div>

    </div>
  );
};
export default Shop;
