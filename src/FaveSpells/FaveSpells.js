import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./FaveSpells.css";
import { auth, database } from "../firebase";

class FavoritesList extends React.Component {
  state = {
    favorites: []
  };

  componentDidMount() {
    if (!auth.currentUser) {
      auth.onAuthStateChanged(user => {
        if (user) {
          this.getFaveSpells();
        }
      });
      return;
    }

    this.getFaveSpells();
  }

  removeFromFaveSpells = spellId => {
    const userId = auth.currentUser.uid;
    database.ref(`users/${userId}/favorites/${spellId}`).remove();
  };

  getFaveSpells() {
    const userId = auth.currentUser.uid;
    database.ref(`users/${userId}/favorites`).on("value", snapshot => {
      if (!snapshot.val()) {
        this.setState({ favorites: [] });
        return;
      }

      const favorites = Object.values(snapshot.val());
      console.log("snapshot", snapshot.val(), "favorites", favorites);
      this.setState({ favorites });
    });
  }

  render() {
    return (
      <div className="fave-spells">
        {this.state.favorites.map(spell => (
          <div key={spell._id}>
            {spell.spell}
            <button onClick={() => this.removeFromFaveSpells(spell._id)}>
              X
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default FavoritesList;
