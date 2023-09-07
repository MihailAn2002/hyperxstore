import React, { useState, useEffect } from "react";
import c from "./section4home.module.css";
import slaider1 from "./slaiderimg/1.png";
import slaider2 from "./slaiderimg/4.png";
import slaider3 from "./slaiderimg/5.png";
import slaider4 from "./slaiderimg/1.png";
import slaider5 from "./slaiderimg/4.png";
import slaider6 from "./slaiderimg/5.png";
import Whymy4 from "./whymy4/whymy4";

const Section4_home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 4);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div>
        <div className={c.section}>
          <div className={c.slaider}>
            <div className={c.slaiderflex} style={{ transform: `translateX(${-currentSlide * 470}px)` }}>
              <img src={slaider1} alt="slaider" />
              <img src={slaider2} alt="slaider" />
              <img src={slaider3} alt="slaider" />
              <img src={slaider4} alt="slaider" />
              <img src={slaider5} alt="slaider" />
              <img src={slaider6} alt="slaider" />
            </div>
          </div>
        </div>
      </div>

      <Whymy4 />
    </div>
  );
};

export default Section4_home;
