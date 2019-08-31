import React, { Component } from "react"
import PubSub from "pubsub-js";
const axios = require("axios");

//自己的组件


export default class List extends Component {
  state = {
    firstView: true,
    loading: false,
    users: [],
    errMsg: ""
  }
  componentDidMount() {
      this.token = PubSub.subscribe('searchContent', async (msgName, val) => {
      // 更新状态(请求中)
      this.setState({
        firstView: false,
        loading: true
      })
        try {
       const url = `https://api.github.com/search/users?q=${val}`;
       const response = await axios.get(url)
      const result = response.data;
      const users = result.items.map(item => ({
        name: item.login,
        url: item.html_url,
        avatar_url: item.avatar_url
      }))
      // 如果成功, 更新状态(成功)
      this.setState({
        loading: false,
        users
      })
    } catch (error) {
        this.setState({
        loading: false,
        errorMsg: '请求失败: statusCode is ' + error.response.status
      })
    }
    })
  }
 
  
  render() {
    const { firstView, loading, users, errMsg } = this.state;
    console.log(users)
    if (firstView) {
      return <h1>请输入搜索内容</h1>;
    } else if (loading) {
      return <h1>正在搜索中......</h1>;
    } else if (errMsg) {
      return <h2>{errMsg}</h2>;
    } else {
      return (
        <div className="row">
          {users.map(user => (
            <div className="card" key={user.name}>
              <a href={user.url}>
                <img
                  src={user.avatar_url}
                  style={{ width: 100 }}
                  alt="给我滚"
                />
              </a>
              <p className="card-text">{user.name}</p>
            </div>
          ))}
        </div>
      )
    }
  }
}

     









 




  