import React, { Component } from 'react'
import './item.css';
import PropTypes from 'prop-types';

export default class Item extends Component {
  static propTypes={
    comment:PropTypes.object.isRequired
  }
  delete=()=>{
    if(window.confirm("确认删除")){
      this.props.deleteName(this.props.index)
    }
  }
  render() {
 console.log(this.props)
    const { comment } = this.props;
    const{userName,content}=comment
  
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="##" onClick={this.delete}>删除</a>
        </div>
        <p className="user">
          <span>{userName}</span>
          <span>说:</span>
        </p>
        <p className="centence">{content}</p>
      </li>
    );
  }
}
