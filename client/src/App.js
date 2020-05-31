import React, { Component } from 'react';
//import "../src/css/new/style.scss";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Landing from 
export default class App extends Component {
  render() {
    return (
      <Route>
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />

      </Route>
    )
  }
}
