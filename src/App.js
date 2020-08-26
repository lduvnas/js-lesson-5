import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import MessageForm from "./components/MessageForm";
import MessageList from "./components/MessageList";

function App() {
  const [counter, setCounter] = useState(0);
  const [chatRoomData, setChatRoomData] = useState({});

  function handleGetChatRoom() {
    const url =
      "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ.json";
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setChatRoomData(data);
      });
  }

  useEffect(() => {
    handleGetChatRoom();
  }, []);

  function handleOnClick() {
    setCounter(counter + 1);
  }

  return (
    <div className="container">
      <h1 onClick={handleOnClick}>
        Chat Room: {chatRoomData.name}-{counter}
      </h1>

      <div className="row">
        <div className="col-md-12">
          <MessageForm
            handleOnSuccess={handleGetChatRoom}
            lable="Enter your message"
            placeholder="Your message"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {chatRoomData.messages ? (
            <MessageList messages={chatRoomData.messages} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
