import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import StarRatingComponent from "react-star-rating-component";

const ListMovie = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <li>
          <div class="image_title">
            {" "}
            <div key={movie.id}>
              <Link to={`/${movie.id}`}> {movie.titre} </Link>
            </div>
            <div>
              <StarRatingComponent
                name="rate1"
                starCount={10}
                value={movie.rate}
              />
            </div>
          </div>

          <img src={movie.poster} alt={movie.alt} border="0" />
        </li>
      ))}
    </>
  );
};
export default ListMovie;
