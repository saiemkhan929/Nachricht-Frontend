import React from "react";
import Avatar from "@material-ui/core/Avatar";

function ChatListItem({ avatar }) {
  return (
    <div className="chat_list_item">
      <div className="__item_icon">
        <Avatar src={avatar} />
      </div>
      <div className="item_details">
        <div className="__top">
          <h5 className="__item_title">Saiem Khan</h5>
          <h6 className="__item_date">yesterday</h6>
        </div>
        <div className="__bottom">
          <p className="__item_last_message">Was machen sie heute</p>
        </div>
      </div>
    </div>
  );
}

export default ChatListItem;
