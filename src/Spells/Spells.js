import React, { Component } from "react";
import modelInstance from "../data/MagicModel";
import { Link } from "react-router-dom";
import "./Spells.css";

class Spells extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "LOADING"
    };
  }

  componentDidMount() {
    modelInstance
      .fetchData("spells")
      .then(spell => {
        this.setState({
          status: "LOADED",
          spell: spell
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
          <div className="page">
            <div className="book">
              {" "}
              visa bara 56 spells!!!
              {this.state.spell.map(spell => (
                <div className="spells" key={spell._id}>
                  <Link to={"/learnedSpells"}>{spell.spell}</Link>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return <b>Failed to load data, please try again</b>;
    }
  }
}
export default Spells;
