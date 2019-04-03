import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import modelInstance from "../data/MagicModel";

class DeathEaters extends Component {
  constructor(props) {
    super(props);
    // We create the state to store the various statusess
    // e.g. API data loading or error
    this.state = {
      status: "LOADING",
      peopleList: []
    };
  }

  checkIfDeatheater() {
    var deList = [];
    for (var x in this.state.peopleList) {
      if (this.state.peopleList[x].deathEater == true) {
        deList.push(this.state.peopleList[x]);
      }
    }
  }

  update() {
    this.setState({
      currentHouse: modelInstance.getHouse()
    });
  }

  componentDidMount() {
    modelInstance.addObserver(this);
    modelInstance
      .fetchData("characters")
      .then(people => {
        this.setState({
          status: "LOADED",
          peopleList: people
        }),
          console.log(people);
      })
      .catch(() => {
        this.setState({
          status: "ERROR"
        });
      });
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
          <div className="sorted">
            <br />
            <div className="btn-place" align="center">
              <Link to="/home">
                <button type="button" className="btn btn-outline-light">
                  Go Back
                </button>
              </Link>
            </div>
            <br />
            <div className="scroll row">
              <p className="col-12" align="center">
                <br />
                <br />
                Here is a list of all Death Eaters
              </p>

              <div id="people">
                <div id="dumb">
                  {this.state.peopleList.map(person => (
                    <p id="peopleList" key={person._id}>
                      {person.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <b>Failed to load data, please try again</b>;
    }
  }
}

export default DeathEaters;
