import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Sorted.css";
import "bootstrap/dist/css/bootstrap.css";
import modelInstance from "../data/MagicModel";

class Sorted extends Component {
  constructor(props) {
    super(props);
    // We create the state to store the various statusess
    // e.g. API data loading or error
    this.state = {
      currentHouse: modelInstance.getHouse()
    };
    this.setHouseCookie = this.setHouseCookie.bind(this);
  }

  setHouseCookie() {
    var currentURL = window.location.search.replace("?", "");
    modelInstance.newCookie("house", currentURL);
  }

  update() {
    this.setState({
      currentHouse: modelInstance.getHouse()
    });
  }

  componentDidMount() {
    this.setHouseCookie();
    modelInstance.addObserver(this);
    console.log(this.state.currentHouse);
  }

  render() {
    return (
      <div className="sorted" align="center">
        <h2>
          Congratulations! You have been sorted into {this.state.currentHouse}!
        </h2>
        <p>Here is a list of some students also in ______, past and present:</p>
        <br />
        <Link to="/home">
          <button type="button" className="btn btn-outline-light">
            Start learning!
          </button>
        </Link>
      </div>
    );
  }
}

export default Sorted;
