import { Link } from "react-router-dom";

import _404 from "../images/404.png";

function NotFound() {
  return (
    <div className="container error-404 d-flex">
      <div className="row">
        <div className="col-12">
          <img src={_404} alt="page not found" className="img-fluid mb-3" />
        </div>
        <div className="col-12">
          <h1>404 Page Not Found</h1>
          <Link to="/">
            <button type="button" className="btn btn-dark mt-3">
              Back to home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
