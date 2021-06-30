import React, { useState, useEffect } from "react";
import Data from "../Data.json";
import { IconButton } from "@material-ui/core/";
import TinderCard from "react-tinder-card";
import { FaStar, FaRedo, FaBolt, FaHeart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
//import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
//for the pressing button effect, wrap your  FaChevronLeft, FaChevronRight, with that ;)

//import { IconButton } from "@material-ui/core/";

/*  use for the pics object-fit :contain, it will save u; */

//import { IconButton } from "@material-ui/core/";
{
  /*  use for the pics object-fit :contain, it will save u; */
}

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
  function deleteProfil(id, arr) {
    setDataArr(arr.filter((item) => item.id !== id));

  };

  

  var cartData = dataArr.map((obj) => {
    const { img, name, age, id } = obj;
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
            className="profil-img"
            style={
              name !== "Hamza"
                ? {
                    backgroundImage: `${stylepic}`,
                  }
                : { backgroundImage: `url(${img})` }
            }
          >
            <h1>{`${name} ${age}`}</h1>
          </div>
          <div className="buttons-swipe">
            <IconButton className="swipe-redo">
              <FaRedo onClick={() => deleteProfil(1, dataArr)} />
            </IconButton>
            <IconButton>
              <AiOutlineClose
                onClick={() => deleteProfil(id, dataArr)}
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
      <FaBolt  /> <span className="hover" >like</span>
      </IconButton>
    </div>
        </div>
      </TinderCard>
    );
  });
  return cartData;
}

export default Cards;
