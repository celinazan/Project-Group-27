import React, { Component } from "react";
import modelInstance from "../data/MagicModel";
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
      .then(dishes => {
        this.setState({
          status: "LOADED",
          dishes: dishes
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
            {this.state.dishes.map(spell => (
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
