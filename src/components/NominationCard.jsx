import React, { useContext, useEffect, useState } from "react";
import MovieContext from "./store/MovieContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function NominationCard({ movie }) {
  const { state, dispatch } = useContext(MovieContext);

  const handleNominate = () => {
    dispatch({ type: "REMOVE_NOMINATE", payload: movie.imdbID });
  };

  return (
    <div className="col-12 d-flex align-items-stretch mb-3">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={movie.Poster}
              className="card-img-top movie-nominated-poster"
              alt={movie.Title}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{movie.Title}</h5>
              <p class="card-text">
                {movie.Type} • {movie.Year}
              </p>
              <button className="btn btn-star">
                <FontAwesomeIcon
                  icon={faStar}
                  className="star-icon stared"
                  onClick={handleNominate}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="card">
        <img
          src={movie.Poster}
          className="card-img-top movie-posters"
          alt={movie.Title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.Title}</h5>
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col">
              <p className="card-text">
                {movie.Type} • {movie.Year}
              </p>
            </div>
            <div className="col-auto">
              <button className="btn btn-star">
                <FontAwesomeIcon
                  icon={faStar}
                  className="star-icon stared"
                  onClick={handleNominate}
                />
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default NominationCard;
