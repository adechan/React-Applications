import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly, playing }, dispatch] = useDataLayerValue();
  const [songRowsState, setSongRowsState] = useState({});

  function makeSongRowSetter(track) {
    const setValue = (value) => {
      // console.log("setValue with " + value + " called for track" + track.id);
      // console.trace();
      // throw "ayy";
      console.log("songRowsState: ", songRowsState);
      let newRowsState = {};
      console.log("track id: ", track.id);

      // Set all other song row states to false
      for (const key in songRowsState) {
        newRowsState[key] = false;
      }

      // Set the current song row state to true
      newRowsState[track.id] = value;
      console.log("newRowsState: ", newRowsState);
      setSongRowsState(newRowsState);
    };

    return setValue;
  }

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img
          className="body__logo"
          src={discover_weekly?.images[0].url}
          alt=""
        />
        <div className="body__infoText">
          <strong className="body__playlist">PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          {playing ? (
            <PauseCircleFilledIcon className="body__green" />
          ) : (
            <PlayCircleFilledIcon className="body__shuffle" />
          )}
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {/* list of songs */}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow
            key={item.track.id}
            track={item.track}
            songRowsState={songRowsState}
            setBackground={makeSongRowSetter(item.track)}
          />
        ))}
      </div>
    </div>
  );
}

export default Body;
