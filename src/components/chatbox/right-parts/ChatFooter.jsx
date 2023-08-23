import React, { useState, useEffect } from "react";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import "./chatFooter.scss";

function ChatFooter() {
  const [send, setsend] = useState(<MicIcon />);
  const [message, setMessage] = useState("");

  const detectChanges = (e) => {
    setMessage(e.target.value);
  };

  const submit = (msg) => {
    console.log(msg);
  };

  useEffect(() => {
    if (message == "") {
      setsend(<MicIcon />);
    } else {
      setsend(<SendIcon />);
    }

    return () => {};
  }, [message]);

  return (
    <div className="chat_footer">
      <div className="__part_one">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
      </div>
      <div className="__part_middle">
        <input
          type="text"
          name="send_message"
          id="send_message"
          placeholder="Type a message"
          onChange={(e) => {
            detectChanges(e);
          }}
        />
      </div>
      <div className="__part_final">
        <IconButton>{send}</IconButton>
      </div>
    </div>
  );
}

export default ChatFooter;
