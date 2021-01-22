import React, { Component } from 'react'
import PubSub from 'pubsub-js'  // 导入消息订阅与发布的库
import axios from 'axios'

export default class PollingHead extends Component {
  search = () => {
    // 获取用户输入(连续解构赋值)
    const { keyword: { value } } = this
    // 发送请求前通知PollingList组件更新状态
    PubSub.publish('sendFor', {
      isFirst: false,
      isLoading: true
    })
    // 发送网络请求
    axios.get(`https://api.github.com/search/users?q=${value}`).then(
      response => {
        // 请求成功后通知PollingList组件更新状态
        PubSub.publish('sendFor', {  // 发布消息
          isLoading: false,
          users: response.data.items
        })
      }, 
      error => {
        // 请求失败后通知PollingList组件更新状态
        PubSub.publish('sendFor', {
          isLoading: false,
          err: error.message
        })
      }
    )
  }
  render () {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索Github用户</h3>
        <div className="search-area">
          <input ref={input => this.keyword = input} type="text" placeholder="输入关键词点击搜索" />&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}
