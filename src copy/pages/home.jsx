import React, { Component } from 'react'

import { NavLink, Route, Switch, Redirect } from "react-router-dom";

import News from "./news";
import Messages from "./messages";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <NavLink className="list-group-item" to="/home/news">
                News
              </NavLink>
            </li>
            <li>
              <NavLink className="list-group-item" to="/home/messages">
                Message
              </NavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/messages" component={Messages} />
            <Redirect to="/home/news" />
          </Switch>
        </div>
      </div>
    );
  }
}
