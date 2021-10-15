import React, { useContext } from "react";
import MovieContext from "./store/MovieContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function MovieCard({ movie }) {
  const { state, dispatch } = useContext(MovieContext);
  const isNominated = state.nominated.some((e) => e.imdbID === movie.imdbID);

  const handleNominate = () => {
    if (state.nominated.length === 5) {
      alert("5 Movies Nominated");
      return;
    }
    if (!isNominated) {
      dispatch({ type: "NOMINATE_MOVIE", payload: movie });
    } else {
      dispatch({ type: "REMOVE_NOMINATE", payload: movie.imdbID });
    }
  };

  return (
    <div className="col-4 d-flex align-items-stretch mb-5">
      <div className="card movie-card">
        <img
          src={movie.Poster}
          className="card-img-top movie-poster"
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
                  className={`star-icon ${isNominated ? "stared" : ""}`}
                  onClick={handleNominate}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
