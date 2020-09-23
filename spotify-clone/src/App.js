import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

// takes care of interaction between our React App and Spotify
const spotify = new SpotifyWebApi();

function App() {
  const [
    { user, token, playlists, discover_weekly },
    dispatch,
  ] = useDataLayerValue();

  useEffect(() => {
    // runs code based on a condition
    const hash = getTokenFromUrl();
    window.location.hash = ""; // to hide the token

    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // gives the accessToken to the Spotify API
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        // console.log("User >>> ", user);

        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        // console.log("Playlists >>> ", playlists);

        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcX2dKLl97NYF").then((response) => {
        // console.log(response);
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, []);

  // console.log("USER >>> ", user);
  // console.log("TOKEN >>> ", token);
  // console.log("PLAYLISTS >>> ", playlists);
  // console.log("DISCOVER WEEKLY >>> ", discover_weekly);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
