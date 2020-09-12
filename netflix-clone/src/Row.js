import React, { useEffect, useState } from "react";
import axios from "./axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./Row.css";

/* 
Tip: 
{ name } means that the export is not default
name means that the export is default (so you can rename it however you want)
*/

// we have to make asynchronous call because we send a request outside to a 3rd party server

const base_url = "https://image.tmdb.org/t/p/original/"; // from documentation

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    // if [], run once when the row loads, and dont run again

    // because we cant use async things inside an useEffect
    // so we create an internal function
    async function fetchData() {
      // await for the promise (response) to come back
      const request = await axios.get(fetchUrl);
      //   console.log(request.data.results);

      setMovies(request.data.results);

      return request;
    } // and then we call it
    fetchData();
  }, [fetchUrl]); // use it in here because we use it in request
  // (because it is a variable outside of the block)

  // console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    console.log(movie);

    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      console.log(movieTrailer(movie.name));
      movieTrailer(movie?.name || movie?.title || "") // gives you a promise with the youtube link
        .then((url) => {
          // https://www.youtube.com/watch?v=XtMThy8QKqU
          const urlParams = new URLSearchParams(new URL(url).search); // gives you v=XtMThy8QKqU
          setTrailerUrl(urlParams.get("v")); // gives you XtMThy8QKqU
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id} // so the app is faster (=> optimization)
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              (isLargeRow ? movie.poster_path : movie.backdrop_path) ||
              (movie.backdrop_path ? movie.backdrop_path : movie.poster_path)
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
