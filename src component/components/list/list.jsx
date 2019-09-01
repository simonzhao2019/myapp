import React, { Component } from 'react'
import PropTypes from 'prop-types';

import  './list.css';
import Item from '../item/item';

export default class List extends Component {
  static propTypes={
    comments:PropTypes.array.isRequired
  }
  render() {
    const { comments, deleteName } = this.props;
    return (
      <div>
        <div className="col-md-8">
          <h3 className="reply">评论回复：</h3>
          <h2 style={{ display: "none" }}>暂无评论，点击左侧添加评论！！！</h2>
          <ul className="list-group">
            {comments.map((comment,index) =>{
              return <Item
                key={comment.id}
                comment={comment}
                deleteName={deleteName}
                index={index}
              ></Item>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
