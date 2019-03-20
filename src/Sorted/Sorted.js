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
    modelInstance.setHouse();
  }

  update() {
    this.setState({
      currentHouse: modelInstance.getHouse()
    });
  }

  componentDidMount() {
    modelInstance.addObserver(this);
    this.setHouseCookie();
  }

  render() {
    return (
      <div className="sorted" align="center">
        <h2>
          Congratulations! You have been sorted into <br /><br /> {this.state.currentHouse}!
        </h2>
        <p>
          Here is a list of some students also in {this.state.currentHouse},
          past and present:
        </p>
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
