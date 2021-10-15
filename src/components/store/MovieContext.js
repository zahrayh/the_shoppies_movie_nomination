import React from "react";

const MovieContext = React.createContext({
  loading: true,
  error: "",
  keyword: "",
  movies: {},
  nominated: []
});

export default MovieContext;
