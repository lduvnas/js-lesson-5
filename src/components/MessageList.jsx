import React from "react";
import MessageItem from "./MessageItem";

export default function MessageList({ messages }) {
  /* console.log(messages); */
  const messageArray = Object.entries(messages); //gör om objekt till array

  return (
    <ul className="list-group">
      {messageArray.reverse().map(item => {
        const key = item[0];
        const messageData = item[1];
        const message = messageData.message;
        return <MessageItem key={key} message={message} />;
      })}
    </ul>
  );
}
