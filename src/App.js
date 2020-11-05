import React, { Component } from "react";
import { Switch, Route, Redirect, HashRouter, BrowserRouter } from "react-router-dom";
import loadable from './utils/loadable'
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

const Index = loadable(() => import(/* webpackChunkName: 'index' */ './pages/index/index'))
const Login = loadable(() => import(/* webpackChunkName: 'login' */ './pages/login/index'))
const View404 = loadable(() => import(/* webpackChunkName: 'view404' */ './pages/Others/404'))
const View500 = loadable(() => import(/* webpackChunkName: 'view500' */ './pages/Others/500'))

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/index"></Redirect>
            <Route path='/login' component={Login} ></Route>
            <Route path='/404' component={View404} ></Route>
            <Route path='/500' component={View500} ></Route>
            <Route component={Index}></Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
