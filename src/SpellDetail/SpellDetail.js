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
      spellIndex: 0,
      offset: 1
    };
  }

  nextPage = () => {
    this.setState({
      spellIndex: this.state.spellIndex + 1,
      offset: this.state.offset + 1
    });
    this.getSpell();
  };

  previousPage = () => {
    this.setState({
      spellIndex: this.state.spellIndex - 1,
      offset: this.state.offset - 1
    });
    this.getSpell();
  };

  getSpell = id => {
    modelInstance
      .fetchDataID(id)
      .then(spell => {
        this.setState({
          spell: spell,
          status: "LOADED"
        });
      })
      .catch(() => {
        this.setState({
          status: "ERROR"
        });
      });
  };

  addToFaveSpells = spell => {
    alert(
      "You have addded the " +
        spell +
        " spell to your favourite spells"
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
                Back to All Spells
              </button>
            </Link>
            <Link to="/favouriteSpells">
              <button
                type="button"
                className="btn btn-outline-light"
                id="faveSpellsButton"
              >
                View Favourited Spells
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
                    Press the button below to add this spell to your list of favourite spells!
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
              <button
                id="bookButton"
                type="button"
                className="btn btn-outline-light"
                onClick={this.previousPage}
              >
                Previous spell
              </button>
              <button
                id="bookButton"
                type="button"
                className="btn btn-outline-light"
                onClick={this.nextPage}
              >
                Next spell
              </button>
            </div>
          </div>
        );

      default:
        return <b>Failed to load data, please try again</b>;
    }
  }
}
export default SpellDetail;
