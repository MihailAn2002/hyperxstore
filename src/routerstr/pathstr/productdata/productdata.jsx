import React, { useEffect } from "react";
import c from "./productdata.module.css";

const ProductList = ({ setDataState }) => {
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.al-style.kz/api/element-info?access-token=Wrjc68_ToNswpeioPYkIO751XftIwdS-&name=hyperx&additional_fields=images" ,
        );
        const jsonData = await response.json();
        // Filter out products with quantity equal to 0
        const filteredData = jsonData.filter((product) => product.quantity !== 0);

        // Remove the last word from the 'name' property of each element
        const modifiedData = filteredData.map((product) => {
          const words = product.name.split(" "); // Split the name into an array of words
          words.pop(); // Remove the last word from the array
          const newName = words.join(" "); // Convert the array of words back to a string
          return { ...product, name: newName }; // Return the modified object with the updated name
        });

        setDataState(modifiedData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [setDataState]);

  return (
    <div className={c.m}>
      
    </div>
  );
};

export default ProductList;
