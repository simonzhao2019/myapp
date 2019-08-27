import React, { Component } from "react";
const allDetails = [
  { id: 1, title: "message001", content: "message content001..." },
  { id: 2, title: "message003", content: "message content003..." },
  { id: 3, title: "message005", content: "message content005..." }
];

export default class MessageItem extends Component {
  state = {
    detail: {}
  };
  componentDidMount() {
    const id = this.props.match.params.id * 1;
    this.getDetail(id);
  }
  componentWillReceiveProps(nextProps) {
    const id = nextProps.match.params.id * 1;
    console.log(id)
    this.getDetail(id);
  }
  getDetail = id => {
    // 模拟发ajax请求
    setTimeout(() => {
      const detail = allDetails.find(detail => detail.id === id);
      console.log(detail)
      this.setState({
        detail
      });
    }, 1000);
  };
  render() {
    const { detail } = this.state;
    return (
      <ul>
        <li>ID:{this.props.match.params.id} </li>
        <li>TITLE:{detail.title}</li>
        <li>CONTENT:{detail.content}</li>
      </ul>
    );
  }
}
