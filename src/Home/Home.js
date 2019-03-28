import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.css";

class Home extends Component {
  render() {
    return (
      <div className="sorting" align="center">
        <Link to="/spells">
          <div className="card" id="spellCard">
            <div className="card-body row">
              <div className="col-12 cardText">
                <h5 className="card-title">Spells</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  See all spells and add notes
                </h6>
              </div>
            </div>
          </div>
        </Link>
        <br />

        <Link to="/learned">
          <div className="card" id="learnedCard">
            <div className="card-body row">
              <div className="col-12 cardText">
                <h5 className="card-title">Learned Spells</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  View your learned spells and their notes
                </h6>
              </div>
            </div>
          </div>
        </Link>
        <br />

        <Link to="/people">
          <div className="card" id="peopleCard">
            <div className="card-body row">
              <div className="col-12 cardText">
                <h5 className="card-title">People</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  View other students and teachers of the four houses
                </h6>
              </div>
            </div>
          </div>
        </Link>
        <br />

        <Link to="/search">
          <div className="card" id="sortingCard">
            <div className="card-body row">
              <div className="col-12 cardText">
                <h5 className="card-title">Change House</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Switch to another of the four houses
                </h6>
              </div>
            </div>
          </div>
        </Link>
        <br />
      </div>
    );
  }
}

export default Home;
