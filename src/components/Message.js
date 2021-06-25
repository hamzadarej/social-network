import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
//the avatar gives them the form of profile pics ,if they get a pic link shows the pic if not shows the icon
function Message(props, message, timestamp, pic) {
  console.log(props.name);

  return (
    <Link to={`/messages/${props.name}`}>
      <div className="message">
        <Avatar className="chat_image" alt={props.name} src={props.pic} />
        <div className="message-details">
          {/* use .message_details {flex:1;} in css ;) */}
          <h2>{props.name}</h2>
          <p>{props.message}</p>
        </div>
        <p className="time">{props.timestamp}</p>
      </div>
    </Link>
  );
}

export default Message;
