import React, { Component } from 'react'
import SearchHead from '../../components/SearchHead'
import SearchList from '../../components/SearchList'

export default class Search extends Component {
  state = {
    users: [],  // 初始值为数组
    isFirst: true,  // 是否是第一次打开页面
    isLoading: false,  // 标识是否处于加载中
    err: ''  // 存储请求相关的错误信息
  }
  // 更新search的state
  updateSearchState = status => {
    this.setState(status)
  }
  render() {
    return (
      <div className="container">
        <SearchHead updateSearchState={this.updateSearchState} />
        <SearchList {...this.state} />
      </div>
    )
  }
}
