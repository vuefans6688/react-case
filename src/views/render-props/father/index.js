import React, { Component } from 'react'

export default class Father extends Component {
  state = {
    name: 'Mary'
  }
  render () {
    const { name } = this.state
    return (
      <div className="father">
        <h2>我是Father组件{this.props.render(name)}</h2>
      </div>
    )
  }
}
