import React, { useState, useEffect } from "react";

const MovieDetail = ({ match, movies }) => {
  const movieId = match.params.id;
  const [fetchMovie, setFetchMovie] = useState({});
  useEffect(() => {
    setFetchMovie(() => movies.find((movie) => movie.id == movieId));
  }, [movieId]);
  return (
    <div className="detail">
      {/* <Link to='/'>go home</Link> */}
      <h4>{fetchMovie.description} </h4>
    </div>
  );
};
export default MovieDetail;
