import React, { Component } from 'react'

export default class Diffing extends Component {
  state = {
    date: new Date().toLocaleString()
  }
  componentDidMount () {
    setInterval(() => {
      this.setState({
        date: new Date().toLocaleString()
      })
    }, 1000)
  }
  render () {
    return (
      <div className="diffing">
        <h1>你好，react！</h1>
        <input type="text" />
        <span style={{paddingLeft: '4px'}}>现在是: {this.state.date}</span>
      </div>
    )
  }
}

