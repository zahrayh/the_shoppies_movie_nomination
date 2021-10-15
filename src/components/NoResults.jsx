import noResults from "../images/no-results.png";

function NoResults() {
  return (
    <div className="row" style={{ alignItems: "center" }}>
      <div className="col-5">
        <img src={noResults} alt="no results found" />
      </div>
      <div className="col-7 nothing-found">
        <h1>Noting Found!</h1>
        <p>Please, try again with another movie title</p>
      </div>
    </div>
  );
}

export default NoResults;
