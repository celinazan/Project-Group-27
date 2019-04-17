import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./FaveSpells.css";
import modelInstance from "../data/MagicModel";
import firebaseApp from "firebase";
import database from "firebase";

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
    firebaseApp.initializeApp({
      apiKey: "AIzaSyDctErSNqeka-L9dZ7hUWbq_ify9kUKg9U", // Auth / General Use
      authDomain: "hogwarts-study-tool.firebaseapp.com", // Auth with popup/redirect
      databaseURL: "https://hogwarts-study-tool.firebaseio.com", // Realtime Database
      storageBucket: "hogwarts-study-tool.appspot.com", // Storage
      messagingSenderId: "755168622286" // Cloud Messaging
    });
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
