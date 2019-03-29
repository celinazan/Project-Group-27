import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./otherPeople.css";
import "bootstrap/dist/css/bootstrap.css";

class OtherPeople extends Component {
  render() {
    return (
      <div className="sorting" align="center">
        <div className="card" id="deathEaterCard">
          <Link to="/deathEaters">
            <div className="card-body row">
              <div className="col-12 cardText">
                <h5 className="card-title">Death Eaters</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  See a list of all known Death Eaters
                </h6>
              </div>
            </div>
          </Link>
        </div>
        <br />

        <Link to="/ministryEmployees">
          <div className="card" id="ministryCard">
            <div className="card-body row">
              <div className="col-12 cardText">
                <h5 className="card-title">Ministry of Magic</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  View employees at the Ministry of Magic
                </h6>
              </div>
            </div>
          </div>
        </Link>
        <br />
        <br />
        <Link to="/home">
          <button
            type="button"
            className="btn btn-outline-light"
          >
            Homepage
          </button>
        </Link>
      </div>
    );
  }
}

export default OtherPeople;
