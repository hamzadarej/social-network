import React, { useRef } from "react";
import { FaStar, FaRedo, FaBolt, FaHeart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
//for the pressing button effect, i wrap your  FaChevronLeft, FaChevronRight, with that ;)
import { IconButton } from "@material-ui/core/";

function ButtonsSwipe() {
  return (
    <div className="buttons-swipe">
      <IconButton className="swipe-redo">
        <FaRedo />
      </IconButton>

      <IconButton className="swipe-close">
        <AiOutlineClose />
      </IconButton>

      <IconButton className="swipe-star">
        <FaStar />
      </IconButton>
      <IconButton className="swipe-heart">
        <FaHeart />
      </IconButton>
      <IconButton className="swipe-bolt">
        <FaBolt />
      </IconButton>
    </div>
  );
}

export default ButtonsSwipe;
