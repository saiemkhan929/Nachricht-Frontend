import React from "react";
import "./chatBody.scss";
import bc from "./bc.jpg";
import Message from "./Message";

function ChatBody() {
  return (
    <div
      className="chat_body"
      style={{ backgroundImage: "url(" + bc + ")", backgroundRepeat: "repeat" }}
    >
      <Message>
        Hello saiem khan how are youHello saiem khan how are youHello saiem khan
        how are youHello saiem khan how are youHello saiem khan how are youHello
        saiem khan how are youHello saiem khan how are youHello saiem khan how
        are youHello saiem khan how are youHello saiem khan how are youHello
        saiem khan how are youHello saiem khan how are youHello saiem khan how
        are you
      </Message>
      <Message sender>I'm fine Thank you </Message>
      <Message sender>I'm fine Thank you </Message>
      <Message sender>I'm fine Thank you </Message>
    </div>
  );
}

export default ChatBody;
