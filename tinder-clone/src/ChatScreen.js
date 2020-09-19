import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Miley",
      image: "https://shok.md/wp-content/uploads/2020/08/Miley-Cyrus.jpg",
      message: "Hello",
    },
    {
      name: "Miley",
      image: "https://shok.md/wp-content/uploads/2020/08/Miley-Cyrus.jpg",
      message: "How are you doing?",
    },
    {
      message: "Im pretty good!",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH MILEY ON 10/08/2020
      </p>

      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="ChatScreen__messageUser">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input" action="">
        <input
          value={input}
          className="chatScreen__inputField"
          placeholder="Type a message..."
          type="text"
          onChange={(event) => setInput(event.target.value)}
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
