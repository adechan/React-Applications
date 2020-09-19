import React from "react";
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Miley"
        message="Hey"
        timestamp="40 seconds ago"
        profilePic="https://shok.md/wp-content/uploads/2020/08/Miley-Cyrus.jpg"
      />
    </div>
  );
}

export default Chats;
