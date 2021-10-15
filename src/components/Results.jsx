import Navbar from "./header/Navbar";
import MovieCard from "./MovieCard";
import NominationCard from "./NominationCard";
import NoResults from "./NoResults";
import Loading from "./Loading";

import React, { useContext } from "react";
import MovieContext from "./store/MovieContext";

function Results() {
  const { state } = useContext(MovieContext);
  let movieList = [];
  let nominationList = [];
  if (!state.loading && state.movies) {
    movieList = state.movies.map((movie) => {
      return <MovieCard movie={movie} key={movie.imdbID} />;
    });
    nominationList = state.nominated;
  }

  return (
    <>
      <div className="bg-results pb-5">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-7">
              <div className="col-12">
                <h2 className="results-heading">{`Search results for "${state.keyword}"`}</h2>
                <hr className="divider" />
                <div className="row">
                  {state.error ? state.error : null}
                  {state.loading ? <Loading /> : null}

                  {state.movies ? movieList : <NoResults />}
                </div>
              </div>
            </div>

            <div className="col-4 offset-md-1">
              <h2 className="results-heading">{`Nominations ${nominationList.length}/5`}</h2>
              <hr className="divider" />
              <div className="row">
                {nominationList.map((movie) => {
                  return <NominationCard movie={movie} key={movie.imdbID} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Results;
