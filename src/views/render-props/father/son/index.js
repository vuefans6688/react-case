import React, { Component } from 'react'

export default class Son extends Component {
  render () {
    return (
      <div className="son">
        <h2>我是Son组件: {this.props.name}</h2>
      </div>
    )
  }
}
