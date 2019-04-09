import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Start.css";
import "bootstrap/dist/css/bootstrap.css";

class Start extends Component {
  render() {
    return (
      <div className="Start" align="center">
      <br /> <br /> <br />
        <h1>Please enter your name in the box below, young witch/wizard:</h1>
        <br />
        <input type="text" placeholder="Your Name" id="name" />
        <br/> <br />
        <Link to="/welcome">
          <button className="btn btn-outline-light" onclick="document.getElementById('name').value" id="nameButton" >Begin</button>
        </Link>
      </div>
    );
  }
}

export default Start;
