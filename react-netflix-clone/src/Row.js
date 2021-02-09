import React, { useState, useEffect } from "react";
import axios from "./axios";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  // if [], run onces when the row loads and don't run it again

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>{title}</h2>

      {/* Container -> posters */}
    </div>
  );
}

export default Row;
