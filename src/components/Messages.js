import React from "react";
import Message from "./Message";
function Messages() {
  return (
    <div className="messages">
      <Message name="olga" message="hi" timestamp="60 seconds ago" pic="..." />
      <Message
        name="zain kk"
        message="hello"
        timestamp="30 seconds ago"
        pic="..."
      />
      <Message
        name="nancy hh"
        message="hiii"
        timestamp="70 seconds ago"
        pic="..."
      />
      <Message
        name="hadi ii"
        message="heei"
        timestamp="90 seconds ago"
        pic="..."
      />
    </div>
  );
}

export default Messages;
