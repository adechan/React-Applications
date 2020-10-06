// spotify logic here
// its not a component

// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";

// the same url as on Spotify Redirect page
const redirectUri = "https://spotify-clone-52ee3.web.app/";
const clientId = "3a376e18d4774bfebf22166e6f3870d2";

// all the permissions users can do in the app
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  // goes to the Url and take accessToken
  return window.location.hash
    .substring(1) // first substring
    .split("&")
    .reduce((initial, item) => {
      // #accessToken=mysupersecretkey&name=ade
      let parts = item.split("="); // split at the '='
      // initial[accessToken] = mysupersecretkey
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
