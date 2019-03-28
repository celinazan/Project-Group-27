import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Characters.css";
import "bootstrap/dist/css/bootstrap.css";
import modelInstance from "../data/MagicModel";

class Characters extends Component {
  constructor(props) {
    super(props);
    // We create the state to store the various statusess
    // e.g. API data loading or error
    this.state = {
      status: "LOADING",
      students: null
    };
    this.createPeopleList = this.createPeopleList.bind(this);
    this.loadPeople = this.loadPeople.bind(this);
  }

  createPeopleList() {
    var peopleList = [];
    var people = this.state.students;
    console.log(people);
    for (var i in people) {
      var person = <p>{people[i].name}</p>;
      peopleList.push(person);
      console.log(person);
    }
    return peopleList;
  }

  update() {
    this.setState({
      currentHouse: modelInstance.getHouse()
    });
  }

  loadPeople() {
    if (window.location.search != "") {
      var currentURL = window.location.search.replace("?", "");
      modelInstance
        .fetchData("characters", currentURL)
        .then(people => {
          this.setState({
            status: "LOADED",
            students: people
          }),
            console.log(people);
        })
        .catch(() => {
          this.setState({
            status: "ERROR"
          });
        });
    } else {
      console.log("else");
      this.setState({
        status: "LOADED"
      });
    }
  }

  componentDidMount() {
    console.log(modelInstance.getHouse());
    modelInstance.addObserver(this);
    this.loadPeople();
  }

  componentWillUnmount() {
    modelInstance.removeObserver(this);
  }

  render() {
    switch (this.state.status) {
      case "LOADING":
        return <em>Loading students...</em>;
      case "LOADED":
        return (
          <div className="characters">
            <h3 align="center">
              Click a house crest on the left to view members of that house
            </h3>
            <Link to="/people/house=?gryffindor">
              <img
                src="https://vignette.wikia.nocookie.net/pottermore/images/1/16/Gryffindor_crest.png/revision/latest/scale-to-width-down/180?cb=20111112232412"
                alt="gryffindor"
                height="100px"
              />
            </Link>
            <br />

            <Link to="/people/house=?slytherin">
              <img
                src="https://vignette.wikia.nocookie.net/pottermore/images/4/45/Slytherin_Crest.png/revision/latest?cb=20111112232353"
                alt="slytherin"
                height="100px"
              />
            </Link>
            <br />

            <Link to="/people/house=?hufflepuff">
              <img
                src="https://vignette.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png/revision/latest/scale-to-width-down/350?cb=20161020182518"
                alt="hufflepuff"
                height="100px"
              />
            </Link>
            <br />

            <Link to="/people/house=?ravenclaw">
              <img
                src="https://vignette.wikia.nocookie.net/pottermore/images/4/40/Ravenclaw_Crest_1.png/revision/latest?cb=20140604194505"
                alt="ravenclaw"
                height="110x"
              />
            </Link>
            <br />
            <br />
            <Link to="/home">
              <button type="button" className="btn-sm btn-outline-light">
                Back to Home
              </button>
            </Link>

            <div>{this.createPeopleList()}</div>
          </div>
        );
      default:
        return <b>Failed to load data, please try again</b>;
    }
  }
}

export default Characters;
