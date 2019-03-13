import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";
import "bootstrap/dist/css/bootstrap.css";

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome" align="center">
        <p>Welcome to the joke site!</p>

        <Link to="/search">
          <button type="button" className="btn btn-outline-danger">
            Get started
          </button>
        </Link>
      </div>
    );
  }
}

export default Welcome;
