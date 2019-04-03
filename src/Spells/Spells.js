import React, { Component } from "react";
import modelInstance from "../data/MagicModel";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Spells.css";

class Spells extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "LOADING",
      spellIndex: 0,
      offset: 56
    };
  }

  nextPage = () => {
    this.setState({
      spellIndex: this.state.spellIndex + 56,
      offset: this.state.offset + 56
    });
    this.getSpell();
  };

  previousPage = () => {
    this.setState({
      spellIndex: this.state.spellIndex - 56,
      offset: this.state.offset - 56
    });
    this.getSpell();
  };

  getSpell = () => {
    modelInstance
      .fetchData("spells")
      .then(spell => {
        /* If statement to not get get blank pages if you go to far*/
        if (this.state.spellIndex > 112) {
          this.setState({
            status: "LOADED",
            spellIndex: 112,
            offset: 168,
            spell: spell.slice(112, 168)
          });
        }
        if (this.state.spellIndex < 0) {
          this.setState({
            status: "LOADED",
            spellIndex: 0,
            offset: 56,
            spell: spell.slice(0, 56)
          });
        } else {
          this.setState({
            status: "LOADED",
            spell: spell.slice(this.state.spellIndex, this.state.offset)
          });
        }
      })
      .catch(() => {
        console.log("error");
        this.setState({
          status: "ERROR"
        });
      });
  };

  componentDidMount() {
    this.getSpell();
  }

  render() {
    switch (this.state.status) {
      case "LOADING":
        return <em>Loading spells...</em>;
      case "LOADED":
        return (
          <div>
            <div className="position" align="center">
              <h3>Click a spell for more details</h3>
            </div>
            <Link to="/home">
              <button
                type="button"
                className="btn btn-outline-light"
                id="homeButton"
              >
                Homepage
              </button>
            </Link>
            <Link to="/learnedSpells">
              <button
                type="button"
                className="btn btn-outline-light"
                id="learnedSpellsButton10"
              >
                Learned spells
              </button>
            </Link>
            <div className="page">
              <div className="book">
                {this.state.spell.map(spell => (
                  <div className="spells" key={spell._id}>
                    <Link to={"/SpellDetail/" + spell._id}>{spell.spell}</Link>
                  </div>
                ))}
              </div>
              <button
                id="bookButton"
                type="button"
                className="btn btn-outline-light"
                onClick={this.previousPage}
              >
                Previous page
              </button>
              <button
                id="bookButton"
                type="button"
                className="btn btn-outline-light"
                onClick={this.nextPage}
              >
                Next page
              </button>
            </div>
          </div>
        );

      default:
        return <b>Failed to load data, please try again</b>;
    }
  }
}
export default Spells;
