import React, { useState, useEffect, useRef } from "react";
import c from "./section1home.module.css";
import slaider1 from "./img/slaider2.png";
import slaider2 from "./img/slaider1.jpg";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? 1 : 0));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className={c.container_slide}>
        <div className={c.item_slide}>
          <div className={c.slide}>
            {currentSlide === 0 && <img src={slaider1} alt="HyperX" />}
            {currentSlide === 1 && (
              <img src={slaider2} alt="HyperX рассрочка" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
