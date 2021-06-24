import React from "react";
import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
function MessageContext() {
  //   const [messages, setMessages] = useState([
  //     {
  //       name: "someone",
  //       message: "how is it going",
  //     },
  //     {
  //       name: "someone",
  //       message: "how is it going",
  //     },
  //     {
  //       name: "someone",
  //       message: "how is it going",
  //     },
  //   ]);
  return (
    <div className="message-context">
      {/* 
      {messages.map((inbox) => {
    to check if i am writing or is someone else words
     message.name ? (
         <div>
     <Avatar className="chat_image" alt={message.name} src={message.pic} />
           <p>{messages.message}</p>
         </div>;) : (<div><p>{messages.message}</p>
         </div>;))
       })} */}
      <p>u matched with (someone) on 10/10/2050</p>
      <p>
        {" "}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        deleniti odio voluptatem dolor ipsa sapiente ducimus esse minima. Itaque
        vel doloribus officiis magnam culpa rerum eius dolores quos illo, animi
        neque exercitationem doloremque laboriosam amet accusamus eaque
        accusantium nam, facere beatae molestias optio ipsam recusandae facilis.
        Ea sint nesciunt itaque tempora sit molestias dignissimos reprehenderit,
        similique corporis modi consectetur enim dolore omnis accusamus. Ipsa
        delectus sequi dolorum animi! Eligendi ad aperiam veritatis vero
        accusantium! Eveniet odio rerum totam ea non nihil expedita enim vel id
        eaque dolore quia, sed dolor aliquid fugit porro beatae. Repellendus nam
        debitis nihil laborum facere beatae illo consequuntur earum, natus
        nesciunt nobis saepe expedita in doloremque ea suscipit. Fugit aut, ut
        ducimus officia porro assumenda rem eaque tenetur, qui aperiam quam.
        Pariatur beatae fuga praesentium dignissimos rem quos, voluptatum
        reprehenderit, vel quidem facere tenetur expedita, ratione illo aperiam
        aliquam cum.
      </p>
    </div>
  );
}

export default MessageContext;
