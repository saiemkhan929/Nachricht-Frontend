import React from "react";
import Avatar from "@material-ui/core/Avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import "./chatHeader.scss";

function ChatHeader() {
  let avatar =
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80";

  return (
    <div className="chat_header">
      <div className="__left">
        <div className="__left_avatar">
          <Avatar src={avatar} />
        </div>
        <div className="__right_details">
          <h5>Saiem Khan</h5>
          <h6>last seen yesterday at 9:30am</h6>
        </div>
      </div>
      <div className="__right">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatHeader;
