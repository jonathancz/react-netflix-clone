import React, { useState, useEffect } from "react";
import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  // if [], run onces when the row loads and don't run it again

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results)
      return request;
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>{title}</h2>

      <div className="row__posters">
        {/* several row poster(s) */}
        
        {movies.map(movie => (
          //<h2>{`${movie.backdrop_path}`}</h2>
          <img src={`${base_url}${movie.backdrop_path}`} alt={movie.name} />
        ))}

      </div>
    </div>
  );
}

export default Row;
