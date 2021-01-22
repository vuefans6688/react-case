import React, { Component } from 'react'
import Father from './father'
import Son from './father/son'

export default class RenderProps extends Component {
  render () {
    return (
      <div className="render-props">
        <h2>我是RenderProps组件</h2>
        <Father render={name => <Son name={name} />} />
      </div>
    )
  }
}
