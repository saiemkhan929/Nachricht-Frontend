import React from "react";
import Avatar from "@material-ui/core/Avatar";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import "./userHeader.scss";

function UserHeader({ data }) {
  console.log(data.displayName);
  const text =
    data.photoURL == null ? data.displayName.slice(0, 2).toUpperCase() : "";
  return (
    <div className="userHeader">
      <div className="header">
        <div className="__left">
          <IconButton>
            <Avatar alt="Remy Sharp" src={data.photoURL}>
              {text}
            </Avatar>
          </IconButton>
        </div>
        <div className="__right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="search_from_list">
        <label forhtml="list-search">
          <div className="list_search_container">
            <SearchIcon />
            <input
              type="text"
              id="list-search"
              placeholder="Search or start new chat"
            />
          </div>
        </label>
      </div>
    </div>
  );
}

export default UserHeader;
