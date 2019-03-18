import React, { Component } from "react";
// Alternative to passing the moderl as the component property,
// we can import the model instance directly
import modelInstance from "../data/DinnerModel";
import "./Dishes.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

class Dishes extends Component {
  constructor(props) {
    super(props);
    // We create the state to store the various statusess
    // e.g. API data loading or error
    this.state = {
      status: "LOADING",
      value: "all",
      filter: "",
      currentId: modelInstance.getCurrentId()
    };
    this.valueUpdate = this.valueUpdate.bind(this);
    this.submitClick = this.submitClick.bind(this);
    this.filterUpdate = this.filterUpdate.bind(this);
    this.currentIdUpdate = this.currentIdUpdate.bind(this);
  }

  decodeUrlBar() {
    var currentURL = window.location.search.replace("?", "");
    var componentArray = [
      currentURL.slice(0, currentURL.lastIndexOf("&")),
      currentURL.slice(currentURL.lastIndexOf("&"))
    ];
    for (var elem in componentArray) {
      var newElem = componentArray[elem].slice(
        componentArray[elem].lastIndexOf("=")
      );
      componentArray[elem] = newElem.replace("=", "");
    }
    return componentArray;
  }

  valueUpdate(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
    console.log(event.target.value);
  }

  filterUpdate(event) {
    this.setState({ filter: event.target.value });
  }

  currentIdUpdate(event) {
    modelInstance.setCurrentId(event.target.value);
    this.setState({ currentId: modelInstance.getCurrentId() });
  }

  submitClick() {
    setTimeout(() => this.componentDidMount(), 100);
  }

  // this methods is called by React lifecycle when the
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to call the API and get the data
  componentDidMount() {
    var searchArray = this.decodeUrlBar();
    console.log(searchArray);

    // when data is retrieved we update the state
    // this will cause the component to re-render
    modelInstance
      .getJoke()
      .then(dishes => {
        this.setState({
          status: "LOADED",
          dishes: dishes
        });
        console.log(this.decodeUrlBar());
      })
      .catch(() => {
        this.setState({
          status: "ERROR"
        });
      });
  }

  render() {
    switch (this.state.status) {
      case "LOADING":
        return <em>Loading...</em>;
      case "LOADED":
        return (
          <div className="col-sm-9">
            <p>{this.state.dishes}</p>
          </div>
        );

      default:
        return <b>Failed to load data, please try again</b>;
    }
  }
}

export default Dishes;
