import axios from 'axios'
import React, { Component } from 'react'

export default class SearchHead extends Component {
  search = () => {
    // 获取用户输入(连续解构赋值)
    const { keyword: { value } } = this
    // 发送请求前通知search更新状态
    this.props.updateSearchState({
      isFirst: false,
      isLoading: true
    })
    // 发送网络请求
    axios.get(`https://api.github.com/search/users?q=${value}`).then(
    // axios.get(`https://localhost:3000/api/search/users?q=${value}`).then(
      response => {
        // 请求成功后通知search更新状态
        this.props.updateSearchState({
          isLoading: false,
          users: response.data.items
        })
      }, 
      error => {
        // 请求失败后通知search更新状态
        this.props.updateSearchState({
          isLoading: false,
          err: error.message
        })
      }
    )
  }
  render () {
    return (
      <div className="search-head">
        <section className="jumbotron">
          <h3 className="jumbotron-heading">搜索Github用户</h3>
          <div>
            <input ref={input => this.keyword = input} type="text" placeholder="输入关键词点击搜索" />&nbsp;
            <button onClick={this.search}>搜索</button>
          </div>
        </section>
      </div>
    )
  }
}
