import logo from "../../images/logo.png";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

import React, { useContext, useState } from "react";
import MovieContext from "../store/MovieContext";

function Navbar() {
  const { state, dispatch } = useContext(MovieContext);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const history = useHistory();
  const API_END_POINT = "https://www.omdbapi.com/?apikey=81949653&s=";

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
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="the shoppies logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <span
              class="navbar-brand mb-0 h1 mx-auto"
              style={{ textAlign: "center" }}
            >
              {state.nominated.length === 5 ? (
                <>
                  <FontAwesomeIcon icon={faTrophy} /> You have nominated 5
                  Movies!
                </>
              ) : (
                ""
              )}
            </span>

            <form className="d-flex" onSubmit={handleSearchSubmit}>
              <input
                type="search"
                className="form-control me-2"
                placeholder="Movie Title"
                required
                value={searchValue}
                onChange={handleChange}
              />
              <button className="btn btn-navbar" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
