import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.css";

class Home extends Component {
  render() {
    return (
        <div className="sorting" align="center">
        
          <div className="card" id="spellCard">
          <Link to="/spells">
            <div className="card-body row">
              <div className="col-12 cardText">
                <h5 className="card-title">Spells</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  See all spells
                </h6>
              </div>
            </div>
            </Link>
          </div>
        
        <br />

        
          <div className="card" id="learnedCard">
          <Link to="/learned">
            <div className="card-body row">
              <div className="col-12 cardText">
                <h5 className="card-title">Learned Spells</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  View and make notes of learned spells
                </h6>
              </div>
            </div>
            </Link>
          </div>
        
        <br />

        
          <div className="card" id="peopleCard">
          <Link to="/people">
            <div className="card-body row">
              <div className="col-12 cardText">
                <h5 className="card-title">People</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  View other students and teacher of your house
                </h6>
              </div>
            </div>
            </Link>
          </div>
        
        <br />

        
          <div className="card" id="sortingCard">
          <Link to="/resort">
            <div className="card-body row">
              <div className="col-12 cardText">
                <h5 className="card-title">Change House</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Switch to another of the four houses
                </h6>
              </div>
            </div>
            </Link>
          </div>
        
        <br />
      </div>
    );
  }
}

export default Home;