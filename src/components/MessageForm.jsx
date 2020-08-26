import React from "react";
import { useRef } from "react";
import ButtonSend from "./ButtonSend";

export default function MessageForm({ lable, placeholder, handleOnSuccess }) {
  const messageInputField = useRef();

  function handleOnClick() {
    const message = messageInputField.current.value;
    const url =
      "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ/messages.json";
    const data = {
      message: message
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data)
    }).then(response => {
      console.log("data har skickats");
      handleOnSuccess();
      messageInputField.current.value = "";
    });
  }
  return (
    <div className="form-group">
      <label>{lable}</label>
      <input
        ref={messageInputField}
        className="form-control"
        type="text"
        placeholder={placeholder}
      />
      <ButtonSend handleOnClick={handleOnClick} lable="Send" />
    </div>
  );
}
