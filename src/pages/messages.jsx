import React, { Component } from "react";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect
} from "react-router-dom";

import MessageItem from './message-item';

export default class Messages extends Component {
  state = {
    messages: []
  };
  componentDidMount() {
    setTimeout(() => {
      const messages = [
        { id: 1, tittle: "message01" },
        { id: 2, tittle: "message02" },
        { id: 3, tittle: "message03" }
      ]
      this.setState({
        messages
      })
    }, 0)
  }
  render() {
    const { messages } = this.state;
    
  
    return (
      <div>
        <ul>
          {messages.map(message => (
            <li key={message.id}>
              <Link to={`/home/messages/${message.id}`}>{message.tittle}</Link>
            </li>
          ))}
        </ul>
        <Route path="/home/messages/:id" component={MessageItem}></Route>
      </div>
    );
  }
}
