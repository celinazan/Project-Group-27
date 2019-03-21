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
      status: "LOADING",

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
    setTimeout(
      () =>
        modelInstance
          .fetchData("characters", this.state.currentHouse)
          .then(people => {
            this.setState({
              status: "LOADED",
              people: people
            });
          })
          .catch(() => {
            this.setState({
              status: "ERROR"
            });
          }),
      100
    );
    console.log("ravenclaw");
  }

  componentWillUnmount() {
    modelInstance.removeObserver(this);
  }

  render() {
    switch (this.state.status) {
      case "LOADING":
        return <em>Loading spells...</em>;
      case "LOADED":
        return (
          <div className="sorted" align="center">
            <h2>
              Congratulations! You have been sorted into <br /> <br />{" "}
              {this.state.currentHouse}!
            </h2>
            <div className="scroll row">
              <p className="col-12">
                Here is a list of some students also in{" "}
                {this.state.currentHouse}, past and present:
              </p>

              <div id="people">
                <ul id="dumb">
                  {this.state.people.map(person => (
                    <li key={person._id}>{person.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <br />
            <Link to="/home">
              <button type="button" className="btn btn-outline-light">
                Start learning!
              </button>
            </Link>
          </div>
        );
      default:
        return <b>Failed to load data, please try again</b>;
    }
  }
}

export default Sorted;
