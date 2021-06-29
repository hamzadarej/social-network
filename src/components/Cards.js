import React, { useState ,useEffect} from "react";
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

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  const [dataArr, setDataArr] = useState(Data);
  console.log(dataArr)

  

  //TINDER CARDS SWIPING PART
  var cartData =dataArr.map((obj) => {
    const {img,name,id}=obj;
    console.log(dataArr);
    
let deleteProfil=(id, arr)=> {
    
setDataArr(arr.filter((item) => item.id !==id));
    
  };

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
          preventSwipe={["up", "down"]}
          
        >
          <button 
            onClick={() => {
              deleteProfil(id,dataArr)  ;
              
            }} 
          >
            delete
          </button>
          <div
            style={{ backgroundImage: `url(${img})` }}
            className="profil-img"
          >
            <h1>{name}</h1>
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
