import React, { Component } from "react";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./FaveSpells.css";
import modelInstance from "../data/MagicModel";
import firebaseApp from "firebase";

function addToFavorites(spell) {
  const userId = firebaseApp.auth().currentUser.uid;
  if (!userId) throw new Error("User is not logged in");

  return database.doc(`favorites/${userId}/${spell.id}`).set(spell);
}

function removeFromFavorites(spell) {
  const userId = firebaseApp.auth().currentUser.uid;
  if (!userId) throw new Error("User is not logged in");

  return database.doc(`favorites/${userId}/${spell.id}`).delete();
}

class FavoritesList extends React.Component {
  state = {
    favorites: []
  };

  componentDidMount() {
    const userId = firebaseApp.auth().currentUser.uid;
    database.ref(`favorites/${userId}`).on("value", snapshot => {
      if (!snapshot.val()) {
        return;
      }

      const favorites = Object.values(snapshot.val());
      this.setState({ favorites });
    });
  }

  render() {
    return <div>snor</div>;
  }
}

export default FavoritesList;
