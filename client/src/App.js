import React, { Component } from 'react';
//import "../src/css/new/style.scss";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Landing from "../src/components/layout/Landing";
import Login from "../src/components/auth/Login";
import Register from "../src/components/auth/Register";
import Accounts from "../src/components/dashboard/Accounts";
import PrivateRoute from "./components/private-route/PrivateRoute";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Switch>
          <PrivateRoute exact path="/accounts" component={Accounts} />
        </Switch>
      </Router>
    )
  }
}
export default App;