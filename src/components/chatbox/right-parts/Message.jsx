import React from "react";

function Message({ sender, children }) {
  let containerClass = sender
    ? "__message_container __sender"
    : "__message_container";
  return (
    <div className={containerClass}>
      <div className="__message">
        <p>{children}</p>
        <span className="__time">7:21 pm</span>
      </div>
    </div>
  );
}

export default Message;
