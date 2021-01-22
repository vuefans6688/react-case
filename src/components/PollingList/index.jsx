import React, { Component } from 'react'
import PubSub from 'pubsub-js'  // 导入消息订阅与发布的库
import './index.css'

export default class PollingList extends Component {
  state = {  // 初始化状态
    users: [],  // 初始值为数组
    isFirst: true,  // 是否是第一次打开页面
    isLoading: false,  // 标识是否处于加载中
    err: ''  // 存储请求相关的错误信息
  }
  componentDidMount () {
    // 订阅消息
    this.token = PubSub.subscribe('sendFor', (_, data) => {  // 用下划线代替第一个参数msg
      this.setState(data)
    })
  }
  componentWillUnmount () {
    // 取消订阅
    PubSub.unsubscribe(this.token)
  }
  render () {
    const { users, isFirst, isLoading, err } = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
          isLoading ? <h2>加载中...</h2> :
          err ? <h2 style={{color: '#f00'}}>{err}</h2> :
          users.map(user => 
            <div className="card" key={user.id}>
              <a href={user.html_url} target="_blank" rel="noreferrer">
                <img alt="avatar" src={user.avatar_url} style={{width: '100px'}} />
              </a>
              <p className="card-text">{user.login}</p>
            </div>
          )
        }
      </div>
    )
  }
}

