import React, { Component } from "react";

//自己的引入
import "./App.css";
import Add from './components/add/add';
import List from './components/list/list';



export default class App extends Component {
 
  state={
    comments:[
      {id:2,userName:"tom",content:"react1111111"}
       ,{id:3,userName:"bob",content:"12221"}
    ]
  }
  addComment = (comment) => {
    const {comments} = this.state
    this.setState({
      comments: [comment,...comments]
    })
  }
  deleteComment=(index)=>{
    const {comments}=this.state
    this.setState({
      comments: comments.filter((c, i) => i!=index)
      // comments:comments.reduce((pre,c,i)=>{
      //   if(i!==index){
      //     pre.push(c)
      //   }
      //   return pre
      // },[])
    })
  }


 
  render() {
    const {comments}=this.state
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add addComment={this.addComment}></Add>
          <List comments={comments} deleteName={this.deleteComment}> </List>
        </div>
      </div>
    )
  }
}

