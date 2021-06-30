import { FaStar, FaRedo, FaBolt, FaHeart } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
//for the pressing button effect, i wrap your  FaChevronLeft, FaChevronRight, with that ;)
import { IconButton } from "@material-ui/core/";
import Data from "../Data.json";
function ButtonsSwipe() {
  const turnoff = useRef(null);
  function deleteProfil() {
    //console.log(Data[0].splice(1));
    // Data[0].current.style.display = "none";
  }
  function superlikeProfil() {
    console.log("kavlaeisai");
  }
  function likeProfil() {
    console.log("maresei");
  }
  return (
    <div className="buttons-swipe">
      <IconButton className="swipe-redo">
        <FaRedo />
      </IconButton>
      <IconButton>
        <AiOutlineClose
          onClick={() => {
            deleteProfil();
          }}
          className="swipe-close"
        />
      </IconButton>

      <IconButton
        onClick={() => {
          superlikeProfil();
        }}
        className="swipe-star"
      >
        <FaStar />
      </IconButton>
      <IconButton
        onClick={() => {
          likeProfil();
        }}
        className="swipe-heart"
      >
        <FaHeart />
      </IconButton>
      <IconButton className="swipe-bolt">
        <FaBolt />
      </IconButton>
    </div>
  );
}

export default ButtonsSwipe;
