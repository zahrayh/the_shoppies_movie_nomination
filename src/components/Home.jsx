import React, { useContext, useState } from "react";
import logo from "../images/logo.png";
import { Link, useHistory } from "react-router-dom";
import MovieContext from "./store/MovieContext";

function Home() {
  const { dispatch } = useContext(MovieContext);
  const [searchValue, setSearchValue] = useState("");

  const history = useHistory();
  const API_END_POINT = "https://www.omdbapi.com/?apikey=81949653&s=";

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetch(API_END_POINT + searchValue)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: { data: data.Search, keyword: searchValue }
        });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });

    history.push(`/results/${searchValue}`);
  };
  return (
    <>
      <div className="bg-home">
        <div className="logo">
          <Link to="/">
            <img className="img-fluid" src={logo} alt="the shoppies logo" />
          </Link>
        </div>

        <div className="center search-box container">
          <h1>Search Movie</h1>
          <form onSubmit={handleSearchSubmit}>
            <div className="input-group input-group-lg">
              <input
                type="text"
                className="form-control"
                placeholder="Movie Title"
                required
                value={searchValue}
                onChange={handleChange}
              />

              <button className="btn" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
