import React, { Component } from "react";
import modelInstance from "../data/DinnerModel";
import "./FullRecipe.css";
import { Link } from "react-router-dom";

class FullRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfGuests: modelInstance.getNumberOfGuests(),
      fullMenuList: modelInstance.getFullMenu(),
      fullMenuPrice: modelInstance.getFullMenuPrice()
    };
    this.showAllIngredients = this.showAllIngredients.bind(this);
  }

  update() {
    this.setState({
      numberOfGuests: modelInstance.getNumberOfGuests(),
      fullMenuList: modelInstance.getFullMenu(),
      fullMenuPrice: modelInstance.getFullMenuPrice()
    });
  }
  // our handler for the input's on change event
  onNumberOfGuestsChanged = e => {
    modelInstance.setNumberOfGuests(e.target.value);
  };

  showAllIngredients(currentDish) {
    let str = "";
    let currentIngredients = currentDish.extendedIngredients;
    for (var ingred in currentIngredients) {
      if (
        currentIngredients[currentIngredients.length - 1] ===
        currentIngredients[ingred]
      ) {
        str += currentIngredients[ingred].name;
      } else {
        str += currentIngredients[ingred].name + ", ";
      }
    }

    return str;
  }

  // this methods is called by React lifecycle when the
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to call the API and get the data
  componentDidMount() {
    modelInstance.addObserver(this);
  }

  componentWillUnmount() {
    modelInstance.removeObserver(this);
  }

  render() {
    return (
      <div className="container" align="center">
        <img
          alt="Chuck Norris"
          src="https://qph.fs.quoracdn.net/main-qimg-5257f03ae8e32d83c34f7bc83ee34c7b"
        />
        <img
          alt="Dad"
          src="https://66.media.tumblr.com/6a8d699d806d3dde81a45bbcff475d5d/tumblr_os50oylPpx1vntq6no2_500.jpg"
        />
      </div>
    );
  }
}
export default FullRecipe;
