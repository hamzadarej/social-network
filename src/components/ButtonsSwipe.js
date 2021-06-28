import React from "react";
import { FaStar, FaRedo, FaBolt, FaHeart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
//for the pressing button effect, i wrap your  FaChevronLeft, FaChevronRight, with that ;)
import { IconButton } from "@material-ui/core/";

function ButtonsSwipe() {
  return (
    <div className="buttons-swipe">
      <IconButton>
        <FaRedo />
      </IconButton>
      <IconButton>
        <AiOutlineClose />
      </IconButton>
      <IconButton>
        <FaStar />
      </IconButton>
      <IconButton>
        <FaHeart />
      </IconButton>
      <IconButton>
        <FaBolt />
      </IconButton>
    </div>
  );
}

export default ButtonsSwipe;
