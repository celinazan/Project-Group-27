import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";
import "bootstrap/dist/css/bootstrap.css";

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome" align="center">
      <br />
        <h1>Welcome Hogwarts School for Witchcraft and Wizardry!</h1>
        <p>This nice piece of muggle technology lets you browse the spells you will be learning.</p>
        <br />
        <Link to="/search">
          <button type="button" className="btn btn-outline-light">
            Get started!
          </button>
        </Link>
      </div>
    );
  }
}

export default Welcome;
