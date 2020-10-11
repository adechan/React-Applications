import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";

function Message() {
  return (
    <div className="message">
      <Avatar src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" />
      <div className="message__info">
        <h4>
          adechan
          <span className="message__timestamp">this is a timestamp</span>
        </h4>
        <p>This is a message</p>
      </div>
    </div>
  );
}

export default Message;
