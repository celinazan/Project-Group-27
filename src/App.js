import React, { Component } from "react";
import { Route } from "react-router-dom";
import Welcome from "./Welcome/Welcome";
import modelInstance from "./data/MagicModel";
import Sorting from "./Sorting/Sorting";
import Sorted from "./Sorted/Sorted";
import Spells from "./Spells/Spells";
import Home from "./Home/Home";
import NewSort from "./NewSort/NewSort";
import SpellDetail from "./SpellDetail/SpellDetail";
import "./App.css";
import LearnedSpells from "./LearnedSpells/LearnedSpells";
import Characters from "./Characters/Characters";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title" align="center">
            {this.state.title}
          </h1>

          {/* We rended diffrent component based on the path */}
          <Route exact path="/" component={Welcome} />
          <Route
            path="/search"
            render={() => <Sorting model={modelInstance} />}
          />

          <Route
            path="/sorted/:house"
            render={() => <Sorted model={modelInstance} />}
          />

          <Route
            path="/spellDetail"
            render={() => <SpellDetail medel={modelInstance} />}
          />

          <Route
            path="/spells"
            render={() => <Spells model={modelInstance} />}
          />

          <Route path="/home" render={() => <Home model={modelInstance} />} />

          <Route
            path="/learnedSpells"
            render={() => <LearnedSpells model={modelInstance} />}
          />

          <Route
            path="/people"
            render={() => <Characters model={modelInstance} />}
          />
        </header>
      </div>
    );
  }
}

export default App;
