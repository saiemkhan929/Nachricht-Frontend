import React from "react";
import ChatListItem from "./ChatListItem";
import "./chatList.scss";

function ChatList() {
  let avatar =
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80";
  return (
    <div className="chatting_lists_container">
      <div className="chatting_lists">
        <ChatListItem avatar={avatar} />
        <ChatListItem avatar={avatar} />

        <ChatListItem avatar={avatar} />
        <ChatListItem avatar={avatar} />
        <ChatListItem avatar={avatar} />
      </div>
    </div>
  );
}

export default ChatList;
