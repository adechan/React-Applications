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

  // This function returns a setter function so that the song row can just call
  // setBackground(true) and all the other rows will be changed to not playing
  function makeSongRowSetter(track) {
    // Ex: track.id 0 will have a setValue function that changes track.id 0's background state
    const setValue = (value) => {
      console.log("songRowsState: ", songRowsState);
      console.log("track id: ", track.id);
      let newRowsState = {};

      // Set all other song row states to false
      for (const key in songRowsState) {
        newRowsState[key] = false;
      }

      // Set the current song row state to true
      newRowsState[track.id] = value;
      console.log("newRowsState: ", newRowsState);

      // Tells react to update the songRowsState variable to this new one on the next "loop" of react's event loop
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
        {
          /* list of songs */
          // Try to think of what order the following code runs in
          // It sees the <SongRow> tag and all the parameters so it gets ready
          // to construct a SongRow "object", but sees we have to call makeSongRowSetter
          // first, so we go there
        }
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
