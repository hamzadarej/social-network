import React, { useState } from "react";
import Data from "../Data.json";
import TinderCard from "react-tinder-card";
import { FaStar, FaRedo, FaBolt, FaHeart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
//import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
//for the pressing button effect, wrap your  FaChevronLeft, FaChevronRight, with that ;)
import { IconButton } from "@material-ui/core/";
function Cards() {
  //TINDER CARDS SWIPING PART
  const onSwipe = (direction) => {
    console.log(direction);
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  const [dataArr, setDataArr] = useState(Data);
  console.log(dataArr);
  let deleteProfil = (id, arr) => {
    setDataArr(arr.filter((item) => item.id !== id));
  };
  //TINDER CARDS SWIPING PART

  var cartData = dataArr.map((obj) => {
    const { img, name, id } = obj;
    console.log(dataArr);
    const stylepic = `url(${Data[1].img}/${Math.floor(Math.random() * 1000)})`;

    return (
      <div className="card-wrapper">
        {/* <IconButton>
          <FaChevronLeft />
        </IconButton> */}

        {/* TINDER CARDS SWIPING PART */}
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
          >
            <h1>{name}</h1>
          </div>
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
        </div>
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
