import React from "react";
import ButtonSend from "./ButtonSend";

export default function MessageForm({ lable, placeholder }) {
  return (
    <div>
      <label>{lable}</label>
      <input type="text" placeholder={placeholder} />
      <ButtonSend lable="Send" />
    </div>
  );
}
