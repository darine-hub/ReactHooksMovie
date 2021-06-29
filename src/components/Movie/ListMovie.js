import React, { useState } from "react";

import SearchMovie from "./SearchMovie";
import StarRatingComponent from "react-star-rating-component";

const ListMovie = (props) => {
  const search = (searchValue) => {
    props.movies.filter(
      (movie) => movie.titre.toLowerCase().indexOf(searchValue) > -1
    );
  };

  return (
    <>
      {props.movies.map((movie, index) => (
        <li>
          <div class="image_title">
            <a href="#">
              {" "}
              {movie.titre}
              <div> {movie.description}</div>
              <div>
                <StarRatingComponent
                  name="rate1"
                  starCount={10}
                  value={movie.rate}
                />
              </div>
            </a>
          </div>

          
            <img src={movie.poster} alt={movie.alt} border="0" />
         
        </li>
      ))}
    </>
  );
};
export default ListMovie;
