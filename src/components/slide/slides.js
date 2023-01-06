import React from "react";
import Carousel from "react-elastic-carousel";

import "./slide.css";

import slide1 from '../../assets/slideimg/blogimg.png'
import slide2 from '../../assets/slideimg/decnl-1.png'
import slide3 from '../../assets/slideimg/novnl-1.png'

let items = [
  slide1,
  slide2,
  slide3

];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 650, itemsToShow: 2 },
  { width: 1000, itemsToShow: 3 },
  { width: 1350, itemsToShow: 4 },
];

function Slide() {
  return (
    <>
      
      <div className="main">
        <Carousel breakPoints={breakPoints} className="crous">

          {items.map((item) => {
            return <img src={item} className="slideimg" alt="slideimg" />;
          }
          )}
          
        </Carousel>
      </div>
    </>
  );
}

export default Slide

