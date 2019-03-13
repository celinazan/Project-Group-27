import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";
import "bootstrap/dist/css/bootstrap.css";

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome" align="center">
        <p>Welcome to the joke site Pun-King!</p>
        <br />
        <p>On this page you will find a variety of funny jokes to laugh at!</p>
        <p>Press the button below to get started :0)</p>
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
