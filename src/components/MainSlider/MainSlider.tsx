// import React from "react"

// function MainSlider() {
//   return (
//     <div>
//         <ul id="demo1">
//           <li>
//             <img src="assets/images/11.jpg" alt="" />
//             <div className="slide-desc">
//               <h3>Buy Rice Products Are Now On Line With Us</h3>
//             </div>
//           </li>
//           <li>
//             <img src="assets/images/22.jpg" alt="" />
//             <div className="slide-desc">
//               <h3>Whole Spices Products Are Now On Line With Us</h3>
//             </div>
//           </li>

//           <li>
//             <img src="assets/images/44.jpg" alt="" />
//             <div className="slide-desc">
//               <h3>Whole Spices Products Are Now On Line With Us</h3>
//             </div>
//           </li>
//         </ul>
//     </div>
//   );
// }
// export default MainSlider;

import { useState, useEffect } from "react";
import { sliderData } from "./slider-data";
import "./Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval: any;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img src={slide.image} alt="slide" className="image" />
                <div className="content">
                  <h2>{slide.heading}</h2>
                  <hr />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
