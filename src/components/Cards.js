import React, { useState, useEffect } from "react";
import Data from "../Data.json";

import TinderCard from "react-tinder-card";
//import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
//for the pressing button effect, wrap your  FaChevronLeft, FaChevronRight, with that ;)

//import { IconButton } from "@material-ui/core/";

/*  use for the pics object-fit :contain, it will save u; */

//import { IconButton } from "@material-ui/core/";
{
  /*  use for the pics object-fit :contain, it will save u; */
}

function Cards({ dataArr, deleteProfil }) {
  //TINDER CARDS SWIPING PART
  const onSwipe = (direction) => {
    console.log(direction);
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  var cartData = dataArr.map((obj) => {
    const { img, name, id } = obj;
    console.log(id);
    const stylepic = `url(${Data[1].img}/${Math.floor(Math.random() * 1000)})`;

    return (
      <TinderCard className="card-wrapper">
        <div
          className="swipe"
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen("fooBar")}
          preventSwipe={["right", "left"]}
          preventSwipe={["up", "down"]}
        >
          <div
            style={
              name !== "Hamza"
                ? {
                    backgroundImage: `${stylepic}`,
                  }
                : { backgroundImage: `url(${img})` }
            }
            className="profil-img"
          >
            <h1>{name}</h1>
          </div>
        </div>
      </TinderCard>
    );
  });
  return cartData;
}

export default Cards;
