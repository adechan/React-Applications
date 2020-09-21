import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";

// takes care of interaction between our React App and Spotify
const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // runs code based on a condition
    const hash = getTokenFromUrl();
    window.location.hash = ""; // to hide the token

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      // gives the accessToken to the Spotify API
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("User >>> ", user);
      });
    }

    console.log("Token >>> ", _token);
  }, []);
  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
