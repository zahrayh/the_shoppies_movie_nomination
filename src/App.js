import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Results from "./components/Results";
import NotFound from "./components/NotFound";
import "./style/styles.css";
import React, { useContext, useReducer } from "react";
import MovieContext from "./components/store/MovieContext";
import MovieReducer from "./components/store/MovieReducer";

function App() {
  const initialState = useContext(MovieContext);
  const [state, dispatch] = useReducer(MovieReducer, initialState);

  return (
    <div className="App">
      <MovieContext.Provider value={{ state, dispatch }}>
        <Router>
          <Switch>
            <Route path="/results">
              <Results />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </MovieContext.Provider>
    </div>
  );
}

export default App;
