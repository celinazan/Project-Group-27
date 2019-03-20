import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Sorted.css";
import "bootstrap/dist/css/bootstrap.css";

class Sorted extends Component {
    render() {
        return (
            <div className="sorted" align="center">
                <h2 >Congratulations! You have been sorted into ______!</h2>
                    <p>Here is a list of some students also in ______, past and present:</p>
                    <br />
                <Link to="spells">
                    <button type="button" className="btn btn-outline-light">
                    Start learning!
                    </button>
                </Link>
            </div>
      );
    }
}

export default Sorted;