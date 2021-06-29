import React, { useState } from "react";
import Data from "../Data.json";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function Slider() {
  const [image, setImage] = useState(0);

  //   const nextSilde = () => {
  //     setImage(image === length - 1);
  //   };

  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="slider-left" />
      <FaArrowAltCircleRight className="slider-right" />
      {Data[0].profileImg.map((img, i) => {
        return <img className="slider-img" src={img} alt="Profile Image" />;
      })}
    </div>
  );
}

export default Slider;
