import React from "react";
import { FaStar, FaRedo, FaBolt, FaHeart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
//for the pressing button effect, i wrap your  FaChevronLeft, FaChevronRight, with that ;)
import { IconButton } from "@material-ui/core/";

function ButtonsSwipe() {
  return (
    <div className="buttons-swipe">
      <IconButton>
        <FaRedo id="refresh"/>
      </IconButton>
      <IconButton>
        <AiOutlineClose id="close"/>
      </IconButton>
      <IconButton>
        <FaStar id="superLike" />
      </IconButton>
      <IconButton>
        <FaHeart id="like" />
      </IconButton>
      <IconButton>
        <FaBolt id="thunder"/>
      </IconButton>
    </div>
  );
}

export default ButtonsSwipe;
