import React, { Component } from "react";
import modelInstance from "../data/MagicModel";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./SpellDetail.css";

class SpellDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "LOADING",
      spell: []
    };
  }

  getSpell = id => {
    modelInstance
      .fetchDataID(id)
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
  };

  addToLearnedSpells = spell => {
    alert(
      "Hello! I am an alert box! When this work you have addded the " +
        spell +
        " spell to your learned spells"
    );
  };

  componentDidMount() {
    this.getSpell(this.props.match.params.spellId);
  }

  render() {
    switch (this.state.status) {
      case "LOADING":
        return <em>Loading spells...</em>;
      case "LOADED":
        return (
          <div>
            <Link to="/home">
              <button
                type="button"
                className="btn btn-outline-light"
                id="homeButton"
              >
                Homepage
              </button>
            </Link>
            <Link to="/Spells">
              <button
                type="button"
                className="btn btn-outline-light"
                id="AllSpellsButton"
              >
                All spells
              </button>
            </Link>
            <Link to="/learnedSpells">
              <button
                type="button"
                className="btn btn-outline-light"
                id="learnedSpellsButton"
              >
                Learned spells
              </button>
            </Link>
            <div className="page">
              <div className="book">
                <div className="leftPage">
                  {this.state.spell.map(spell => (
                    <div className="spell" key={spell._id}>
                      {spell.spell}
                    </div>
                  ))}
                  {this.state.spell.map(spell => (
                    <div className="type header content" key={spell._id}>
                      Type: {spell.type}
                    </div>
                  ))}
                  {this.state.spell.map(spell => (
                    <div className="effect header content" key={spell._id}>
                      Effect: {spell.effect}
                    </div>
                  ))}
                </div>
                <div className="rightPage">
                  <div className="header">
                    You can add it to your learned spells and add your own note.
                  </div>
                  <button
                    id="addSpellButton"
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={() => this.addToLearnedSpells()}
                  >
                    Add
                  </button>
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
export default SpellDetail;
