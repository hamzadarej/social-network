import React from "react";
import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import SelectInput from "@material-ui/core/Select/SelectInput";
import { v4 as uuidv4 } from "uuid";

function MessageContext(props) {
  //to get the name of the text user from the url

  const pathname = window.location.pathname;

  const arr = pathname.split("/");
  const personName = arr[arr.length - 1];
  //to find the message history of this name
  const namefinder = props.Data.find((el) => el.name == `${personName}`);
  const personChatHistory = namefinder.msges;
  console.log(personChatHistory);

  const [userInput, setUserInput] = useState("");
  //dinoume sto state mas keno value ""
  function changeHandle(e) {
    //WE GOT WHAT HE WRITES
    setUserInput(e.target.value);
  }
  function ftiaxetoSubmit(e) {
    e.preventDefault();

    if (userInput.length) {
      //THIS OBJECT IS OURCOMPONENTS, IF WE WANT TO ADD SOMETHING WE ADD IT HERE
      setUserInput((prevState) => [
        ...prevState,
        { id: uuidv4(), title: userInput.trim(), done: false },
      ]);
      // console.log(props.id);
      setUserInput("");
    }
  }
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
      <div className="chatscreen-user-message">
        <p className="chatscreen-user-text">zdgn</p>
      </div>

      <form className="user-input" onSubmit={ftiaxetoSubmit}>
        <input
          value={userInput}
          onChange={changeHandle}
          className="user-input-field"
          placeholder="Type ur message"
          type="text"
        ></input>
        <button type="submit" className="user-input-button">
          SEND
        </button>
      </form>
    </div>
  );
}

export default MessageContext;
