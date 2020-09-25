import React, { useEffect, useState } from "react";
import { useDataLayerValue } from "./DataLayer";
import "./SongRow.css";

function SongRow({ track, setBackground, songRowsState }) {
  const [{}, dispatch] = useDataLayerValue();
  // songRowsState[track.id]
  const handlePlayingSong = (track) => {
    console.log("TRACK >>> ", track);
    dispatch({
      type: "SET_ITEM",
      item: track,
    });

    dispatch({
      type: "SET_PLAYING",
      playing: true,
    });

    setBackground(true);
  };

  return (
    <div
      onClick={() => handlePlayingSong({ track })}
      className={"songRow " + (songRowsState[track.id] ? "playing" : "none")}
    >
      <img className="songRow__album" src={track.album.images[0].url} alt="" />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
