import React, { Component } from 'react'
import PubSub from "pubsub-js";

export default class Search extends Component {
  constructor(prop){
    super(prop)
    this.textInput=React.createRef()
  }
  
  handleSearch=()=>{
    const val = this.textInput.current.value.trim()
   PubSub.publish("searchContent", val)
   this.textInput.current.value=""
   
  }

  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input
              type="text"
              placeholder="enter the name you search"
              ref={this.textInput}
            />
            <button onClick={this.handleSearch}>Search</button>
          </div>
        </section>
      </div>
    );
  }
}
