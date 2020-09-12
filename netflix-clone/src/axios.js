// every request that im gonna send is gonna have
// the same starting URL

// axios helps you make http requests

import axios from "axios";

// good to use when you do many requests in your app
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// instance.get("/foo-bar") -> https://api.themoviedb.org/3/foo-bar

export default instance;
