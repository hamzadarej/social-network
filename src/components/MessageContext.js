import React from "react";
import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import SelectInput from "@material-ui/core/Select/SelectInput";

function MessageContext(props) {
  //to get the name of the text user from the url

  const pathname = window.location.pathname;

  const arr = pathname.split("/");
  const personName = arr[arr.length - 1];
  //to find the message history of this name
  const namefinder = props.Data.find((el) => el.name == `${personName}`);
  const personChatHistory = namefinder.msges;
  console.log(personChatHistory);

  const [usertext, setUsertext] = useState("");
  const handleEv = (e) => {
    e.preventDefault();
  };
  return (
    <div className="message-context">
      <p className="chatscreen-intro">
        YOU MATCHED WITH
        <b>
          &nbsp;
          {personName.toUpperCase()}&nbsp;
        </b>
        on
        {` ${new Date().getDate()}/ ${new Date().getMonth()} / ${new Date().getFullYear()}`}
      </p>

      {personChatHistory.map((e) => {
        if (personName) {
          return (
            <div className="chatscreen-message">
              <Avatar className="chatscreen-avatar" alt={`${personName}`} />
              <p className="chatscreen-text">{e}</p>
            </div>
          );
        } else {
          return (
            <div className="chatscreen-user-message">
              <p className="chatscreen-user-text">{e}</p>
            </div>
          );
        }
      })}

      <form className="user-input">
        <input
          value={usertext}
          onChange={(e) => setUsertext(e.target.value)}
          className="user-input-field"
          placeholder="Type ur message"
          type="text"
        ></input>
        <button type="submit" onClick={handleEv} className="user-input-button">
          SEND
        </button>
      </form>
    </div>
  );
}

export default MessageContext;
