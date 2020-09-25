import React, { useEffect } from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";

import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { Grid, Slider } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";

function Footer() {
  const [{ item, playing }, dispatch] = useDataLayerValue();
  console.log(item);

  const handlePlaying = () => {
    if (playing) {
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src={item?.track.album.images[0]?.url}
          alt=""
        />

        {item ? (
          <div className="footer__songInfo">
            <h4>{item?.track.name}</h4>
            <p>
              {" "}
              {item?.track.artists.map((artist) => artist.name).join(", ")}
            </p>
          </div>
        ) : (
          <div className="footer_songInfo">
            <h4>There is no song currently playing</h4>
            <p>...</p>
          </div>
        )}
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        {playing ? (
          <PauseCircleOutlineIcon
            onClick={handlePlaying}
            fontSize="large"
            className="footer__green"
          />
        ) : (
          <PlayCircleOutlineIcon
            onClick={handlePlaying}
            fontSize="large"
            className="footer__icon"
          />
        )}
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>

          <Grid item>
            <VolumeDownIcon />
          </Grid>

          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
