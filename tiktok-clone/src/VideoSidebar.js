import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";

function VideoSidebar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon
            style={{ fontSize: 25 }}
            onClick={(e) => setLiked(false)}
          />
        ) : (
          <FavoriteBorderIcon
            style={{ fontSize: 25 }}
            onClick={(e) => setLiked(true)}
          />
        )}
        <p className="videoSidebar__text">{liked ? likes + 1 : likes}</p>
      </div>

      <div className="videoSidebar__button">
        <ChatIcon style={{ fontSize: 25 }} />
        <p className="videoSidebar__text">{messages}</p>
      </div>

      <div className="videoSidebar__button">
        <ShareIcon style={{ fontSize: 25 }} />
        <p className="videoSidebar__text">{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
