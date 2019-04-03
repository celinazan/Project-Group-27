import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./otherPeople.css";
import "bootstrap/dist/css/bootstrap.css";

class OtherPeople extends Component {
  render() {
    return (
      <div className="sorting" align="center">
        <div className="card" id="deathEaterCard">
          <Link to="/deatheaters">
            <div className="card-body row">
              <div className="col-6 cardText">
                <h5 className="card-title">Death Eaters</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  See a list of all known Death Eaters
                </h6>
              </div>
              <div className="col-6">
                <img
                  src="https://kidsartuk.com/wp-content/uploads/2017/02/Death-Eater-Dark-Mark.png"
                  alt="darkmark"
                  height="125px"
                />
              </div>
            </div>
          </Link>
        </div>
        <br />

        <Link to="/ministryemployees">
          <div className="card" id="ministryCard">
            <div className="card-body row">
              <div className="col-6 cardText">
                <h5 className="card-title">Ministry of Magic</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  View employees at the Ministry of Magic
                </h6>
              </div>
              <div className="col-6">
                <img
                  src="https://www.popcultcha.com.au/media/catalog/product/cache/0/thumbnail/200x200/9df78eab33525d08d6e5fb8d27136e95/h/a/harry-potter-3d-chrome-minestry-of-magic-logo-emblem.png"
                  alt="ministrylogo"
                  height="120px"
                  width="140px"
                />
              </div>
            </div>
          </div>
        </Link>
        <br />
        <br />
        <Link to="/home">
          <button type="button" className="btn btn-outline-light">
            Homepage
          </button>
        </Link>
      </div>
    );
  }
}

export default OtherPeople;
