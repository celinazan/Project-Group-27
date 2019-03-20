import React, { Component } from "react";
import modelInstance from "../data/MagicModel";
import "./Spells.css";
import { Link } from "react-router-dom";

class Spells extends Component {
  constructor(props) {
    super(props);
    // We create the state to store the various statusess
    // e.g. API data loading or error
    this.state = {
      status: "LOADING"
    };
  }

  // this methods is called by React lifecycle when the
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to call the API and get the data
  componentDidMount() {
    // when data is retrieved we update the state
    // this will cause the component to re-render
    modelInstance
      .fetchData("spells")
      .then(spellList => {
        this.setState({
          status: "LOADED",
          spellList: spellList
        });
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
        return <em>Loading spells...</em>;
      case "LOADED":
        return (
          <div className="col-sm-9" id="spells">
            {this.state.spellList.map(spell => (
              <div key={spell._id}>{spell.spell}</div>
            ))}
          </div>
        );

      default:
        return <b>Failed to load data, please try again</b>;
    }
  }
}
export default Spells;
