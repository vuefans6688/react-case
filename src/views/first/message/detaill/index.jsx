import React, { Component } from 'react'
// import qs from 'querystring'

export default class Detail extends Component {
  render () {
    // 接收param参数
    // const { id, title } = this.props.match.params

    // 接收search参数
    // const { search } = this.props.location
    // const { id, title } = qs.parse(search.slice(1))  // 去掉id左边的?

    // 接收state参数
    const { id, title } = this.props.location.state || {}
    const data = [
      { id: '01', content: '你好，中国' },
      { id: '02', content: '你好，湖北' },
      { id: '03', content: '你好，未来的自己' }
    ]
    const result = data.find(item => item.id === id) || {}
    return (
      <ul>
        <li>编号: {id}</li>
        <li>标题: {title}</li>
        <li>内容: {result.content}</li>
      </ul>
    )
  }
}
