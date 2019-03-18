import React, { Component } from "react";
import "./Sorting.css";
import "bootstrap/dist/css/bootstrap.css";

class Sorting extends Component {
  render() {
    return (
      <div className="sorting" align="center">
      <h2>Before you can begin your adventure learning spells at Hogwarts, you will be sorted into one of the four houses.</h2>
      <p>Choose a house:</p>
        <div className="card">
          <div className="card-body">
        <h5 class="card-title">Gryffindor</h5>
        <h6 class="card-subtitle mb-2 text-muted">Brave and Brazen</h6>
          </div>
        </div>
      <br />

      <div className="card">
        <div className="card-body">
          <h5 class="card-title">Slytherin</h5>
          <h6 class="card-subtitle mb-2 text-muted">Cunning and Ambitious</h6>
        </div>
      </div>
      <br />
      
      <div className="card">
        <div className="card-body">
          <h5 class="card-title">Hufflepuff</h5>
          <h6 class="card-subtitle mb-2 text-muted">Loyal and Kind</h6>
        </div>
      </div>
      <br />
      
      <div className="card">
        <div className="card-body">
          <h5 class="card-title">Ravenclaw</h5>
          <h6 class="card-subtitle mb-2 text-muted">Clever and Creative</h6>
        </div>
      </div>
      <br />
      </div>
    );
  }
}

export default Sorting;
