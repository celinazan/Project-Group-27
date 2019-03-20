import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NewSort.css";
import "bootstrap/dist/css/bootstrap.css";

class NewSort extends Component {
  render() {
    return (
      <div className="sorting" align="center">
        <h1>Please choose your new house:</h1>
        <br />
        <div className="card" id="gryffindorCard">
          <Link to="/sorted/gryffindor">
            <div className="card-body row">
              <div className="col-6 cardText">
                <h5 className="card-title">Gryffindor</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Brave and Brazen
                </h6>
              </div>
              <div className="col-6">
                <img
                  src="https://i.pinimg.com/originals/d1/e8/53/d1e853a51cc4f6b25a9f96914e04b992.png"
                  alt="gryffindor"
                  height="100px"
                />
              </div>
            </div>
          </Link>
        </div>

        <br />

        <div className="card" id="slytherinCard">
          <Link to="/sorted/slytherin">
            <div className="card-body row">
              <div className="col-6 cardText" id="slytherin">
                <h5 className="card-title">Slytherin</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Cunning and Ambitious
                </h6>
              </div>
              <div className="col-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/34/Slytherin.png"
                  alt="slytherin"
                  height="100px"
                />
              </div>
            </div>
          </Link>
        </div>

        <br />

        <div className="card" id="hufflepuffCard">
          <Link
            to={"/sorted/hufflepuff"}
          >
            <div className="card-body row">
              <div className="col-6 cardText" id="hufflepuff">
                <h5 className="card-title">Hufflepuff</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Loyal and Kind
                </h6>
              </div>
              <div className="col-6">
                <img
                  src="http://static1.squarespace.com/static/58881ebecd0f68fe5325db26/58e7baa4ebbd1a4ffd8a2fa9/58e7c22620099ea6518ba69c/1520449065213/?format=1500w"
                  alt="hufflepuff"
                  height="100px"
                />
              </div>
            </div>
          </Link>
        </div>

        <br />

        <div className="card" id="ravenclawCard">
          <Link to="/sorted/ravenclaw">
            <div className="card-body row">
              <div className="col-6 cardText" id="ravenclaw">
                <h5 className="card-title">Ravenclaw</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Clever and Creative
                </h6>
              </div>
              <div className="col-6">
                <img
                  src="http://static1.squarespace.com/static/58881ebecd0f68fe5325db26/58e7baa4ebbd1a4ffd8a2fa9/58e7c21420099ea6518b9eee/1491583516246/?format=1500w"
                  alt="ravenclaw"
                  height="100px"
                />
              </div>
            </div>
          </Link>
        </div>

        <br />
        <br />

        <div className="card">
          <Link to="/sorted">
            <div className="card-body row">
            <div className="col-6 cardText">
              <h5 className="card-title">Random</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Let the Sorting Hat decide!
              </h6>
            </div>
            <div className="col-6">
            <img
              src="https://vignette.wikia.nocookie.net/harrypotter/images/6/62/Sorting_Hat.png/revision/latest/scale-to-width-down/350?cb=20161120072849"
              alt="hat"
              height="100px"
              />
            </div>
            </div>
          </Link>
        </div>
        <br />
      </div>
    );
  }
}

export default NewSort;
