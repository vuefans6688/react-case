import React, { Component } from 'react'

export default class News extends Component {
  componentDidMount () {
    setTimeout(() => {
      this.props.history.push('/first/message')
    }, 2000)
  }
  render () {
    return (
      <ul>
        <li>新闻001</li>
        <li>新闻002</li>
        <li>新闻003</li>
      </ul>
    )
  }
}
