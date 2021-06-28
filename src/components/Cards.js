import React from "react";
import TinderCard from "react-tinder-card";
import {
  FaUserAlt,
  FaRocketchat,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaFireAlt,
  FaRedo,
  FaBolt,
  FaHeart,
} from "react-icons/fa";
//for the pressing button effect, wrap your  FaChevronLeft, FaChevronRight, with that ;)
import { IconButton } from "@material-ui/core/";
{
  /*  use for the pics object-fit :contain, it will save u; */
}
function Cards() {
  //TINDER CARDS SWIPING PART
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  //TINDER CARDS SWIPING PART
  return (
    <div className="cardi">
      <IconButton>
        <FaChevronLeft />
      </IconButton>
      {/* TINDER CARDS SWIPING PART */}
      <TinderCard
        onSwipe={onSwipe}
        onCardLeftScreen={() => onCardLeftScreen("fooBar")}
        preventSwipe={["right", "left"]}
      >
        swipe me :p !
      </TinderCard>
      {/* TINDER CARDS SWIPING PART */}
      <IconButton>
        <FaChevronRight />
      </IconButton>
    </div>
  );
}

export default Cards;
