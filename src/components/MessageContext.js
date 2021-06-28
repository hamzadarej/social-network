import React from "react";
import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";

function MessageContext(props) {
  //to get the name of the text user from the url

  const pathname = window.location.pathname;

  const arr = pathname.split("/");
  const personName = arr[arr.length - 1];
  //to find the message history of this name
  const skata = props.Data.find((el) => el.name == `${personName}`);
  const personHistory = skata.msges;
  console.log(personHistory);
  let img = `${props.Data[0].img}/${Math.floor(Math.random() * 1000)}`;
  const [texts, setTexts] = useState([props.Data]);

  console.log();
  return (
    <div className="message-context">
      <p>
        u matched with <br></br>
        <b>{personName} </b> on
        {` ${new Date().getDate()}/ ${new Date().getMonth()} / ${new Date().getFullYear()}`}
      </p>

      {props.Data.map((e) => {
        return (
          <div className="skt">
            <p>{e.msges.map((el) => `${el} `)}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MessageContext;
