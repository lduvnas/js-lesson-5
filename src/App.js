import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import MessageForm from "./components/MessageForm";
import MessageList from "./components/MessageList";

function App() {
  return (
    <div className="container">
      <h1>Chat Room</h1>
      <MessageForm lable="Enter your message" placeholder="Your message" />
      <MessageList />
    </div>
  );
}

export default App;
