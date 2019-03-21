import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Characters.css";
import "bootstrap/dist/css/bootstrap.css";

class Characters extends Component {
  render() {
    return (
      <div className="sorting">
      <Link to="/people/gryffindors">
        <img
            src="https://vignette.wikia.nocookie.net/pottermore/images/1/16/Gryffindor_crest.png/revision/latest/scale-to-width-down/180?cb=20111112232412"
            alt="gryffindor"
            height="100px"
        />
        </Link>
        <br />

        <Link to="/people/slytherins">
        <img
            src="https://vignette.wikia.nocookie.net/pottermore/images/4/45/Slytherin_Crest.png/revision/latest?cb=20111112232353"
            alt="slytherin"
            height="100px"
        />
        </Link>
        <br />
        
        <Link to="/people/hufflepuffs">
        <img
            src="https://vignette.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png/revision/latest/scale-to-width-down/350?cb=20161020182518"
            alt="hufflepuff"
            height="100px"
        />
        </Link>
        <br />

        <Link to="/people/ravenclaws">
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
      </div>
    );
  }
}

export default Characters;
