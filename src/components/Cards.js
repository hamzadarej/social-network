import React from "react";
import Data from "../Data.json";
import TinderCard from "react-tinder-card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
 console.log(TinderCard)
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  console.log(onCardLeftScreen);

  //TINDER CARDS SWIPING PART
  const cartData = Data.map((obj) => {
    const { img, name } = obj;
    return (
      <div className="card-wrapper">
        {/* <IconButton>
          <FaChevronLeft />
        </IconButton> */}

        {/* TINDER CARDS SWIPING PART */}
        <TinderCard
          className="swipe"
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen("fooBar")}
          preventSwipe={["up", "down"]}
        >
          <div
            style={{ backgroundImage: `url(${img})` }}
            className="profil-img"
          >
            <h1>{name}</h1>
          </div>
        </TinderCard>
        {/* TINDER CARDS SWIPING PART */}

        {/* <IconButton>
          <FaChevronRight />
        </IconButton> */}
      </div>
    );
  });
  return cartData;
}

export default Cards;
