import { FaStar, FaRedo, FaBolt, FaHeart } from "react-icons/fa";

import { AiOutlineClose } from "react-icons/ai";
//for the pressing button effect, i wrap your  FaChevronLeft, FaChevronRight, with that ;)
import { IconButton } from "@material-ui/core/";

function ButtonsSwipe({ deleteProfil, dataArr, id }) {
  return (
    <div className="buttons-swipe">
      <IconButton className="swipe-redo">
        <FaRedo />
      </IconButton>
      <IconButton>
        <AiOutlineClose
          onClick={() => {
            deleteProfil(id, dataArr);
          }}
          className="swipe-close"
        />
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
