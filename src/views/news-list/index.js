import React, { Component } from 'react'
import './index.scss'

export default class NewsList extends Component {
  state = {
    newsArray: []
  }
  customRef = React.createRef()
  componentDidMount () {
    setInterval(() => {
      // 获取初始状态
      const { newsArray } = this.state
      // 模拟一条新闻
      const news = '新闻' + (newsArray.length + 1)
      // 更新状态
      this.setState({
        newsArray: [news, ...newsArray]
      })
    }, 1000)
  }
  getSnapshotBeforeUpdate () {
    return this.customRef.current.scrollHeight
  }
  componentDidUpdate (props, state, height) {
    this.customRef.current.scrollTop += this.customRef.current.scrollHeight - height
  }
  render () {
    const { newsArray } = this.state
    return (
      <div className="news-list" ref={this.customRef}>
        {
          newsArray.map((news, index) => <div key={index} className="news-item">{news}</div>)
        }
      </div>
    )
  }
}
