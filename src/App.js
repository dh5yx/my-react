import React, { Component } from "react";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";

import Index from "./pages/index/index";
import Login from "./pages/login/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <HashRouter>
          <Switch>
            <Redirect exact from="/" to="/index"></Redirect>
            <Route path='/login' component={Login} ></Route>
            <Route component={Index}></Route>
          </Switch>
        </HashRouter>
      </>
    );
  }
}

export default App;
