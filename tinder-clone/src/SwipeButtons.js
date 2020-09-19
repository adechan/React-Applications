import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <ReplayIcon style={{ fontSize: 30 }} />
      </IconButton>

      <IconButton className="swipeButtons__left">
        <CloseIcon style={{ fontSize: 30 }} />
      </IconButton>

      <IconButton className="swipeButtons__star">
        <StarRateIcon style={{ fontSize: 30 }} />
      </IconButton>

      <IconButton className="swipeButtons__right">
        <FavoriteIcon style={{ fontSize: 30 }} />
      </IconButton>

      <IconButton className="swipeButtons__lightning">
        <FlashOnIcon style={{ fontSize: 30 }} />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
