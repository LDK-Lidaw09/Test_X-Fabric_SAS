import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profil from "./components/Profil";
import Recap from "./components/Recap";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/">
            <Profil />
          </Route>
          <Route exact path="/recap">
            <Recap />
          </Route>
        </Router>
      </div>
    );
  }
}
