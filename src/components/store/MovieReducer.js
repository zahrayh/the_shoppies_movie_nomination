export default function reducer(state, action) {
  switch (action.type) {
    case "NOMINATE_MOVIE":
      return {
        ...state,
        nominated: [...state.nominated, action.payload]
      };
    case "REMOVE_NOMINATE":
      return {
        ...state,
        nominated: state.nominated.filter(
          (movie) => movie.imdbID !== action.payload
        )
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: "",
        keyword: action.payload.keyword,
        movies: action.payload.data
      };

    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: "Something went wrong",
        movies: {}
      };

    default:
      return state;
  }
}
