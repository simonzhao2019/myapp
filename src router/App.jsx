import React, { Component } from "react"
import {
  BrowserRouter,
  HashRouter,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect
} from "react-router-dom"
import About from './pages/about';
import Home from './pages/home';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink className="list-group-item" to="/about">
                About
              </NavLink>
              <NavLink className="list-group-item" to="/home">
                Home
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route path="/about" component={About}  />
                  <Route path="/home" component={Home} />
                  <Redirect to="/home"></Redirect>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
