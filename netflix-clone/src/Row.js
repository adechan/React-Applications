import React, { useEffect, useState } from "react";
import axios from "./axios";
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

  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id} // so the app is faster (=> optimization)
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
