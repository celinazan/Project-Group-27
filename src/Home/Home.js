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
                  See all spells and add notes
                </h6>
              </div>
            </div>
          </Link>
        </div>
        <br />

        <div className="card" id="learnedCard">
          <Link to="/learnedSpells">
            <div className="card-body row">
              <div className="col-12 cardText">
                <h5 className="card-title">Learned Spells</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  View your learned spells and their notes
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
                <h5 className="card-title">House Members</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  View other students and teachers of the four houses
                </h6>
              </div>
            </div>
          </Link>
        </div>
        <br />

        <div className="card" id="OtherPeopleCard">
          <Link to="/otherPeople">
            <div className="card-body row">
              <div className="col-12 cardText">
                <h5 className="card-title">Other People</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  View other people in the Harry Potter-Universe
                </h6>
              </div>
            </div>
          </Link>
        </div>
        <br />

        <div className="card" id="sortingCard">
          <Link to="/search">
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
