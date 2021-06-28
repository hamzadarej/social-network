import React from "react";
import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";

function MessageContext(props) {
  let img = `${props.Data[0].img}/${Math.floor(Math.random() * 1000)}`;
  const [messages, setMessages] = useState([
    {
      name: "someone",
      image: { img },
      message: "how is it going",
    },
    {
      name: "someone",
      image: { img },
      message: "how is it going",
    },
    {
      name: "someone",
      message: "how is it going",
    },
  ]);
  return (
    <div className="message-context">
      <p>
        u matched with {props.Data[0].name} on
        {`${new Date().getDate()}/ ${new Date().getMonth()} / ${new Date().getFullYear()}`}
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        deleniti odio voluptatem dolor ipsa sapiente ducimus esse minima. Itaque
        vel doloribus officiis magnam culpa rerum eius dolores quos illo, animi
        neque exercitationem doloremque laboriosam amet accusamus eaque
      </p>
    </div>
  );
}

export default MessageContext;
