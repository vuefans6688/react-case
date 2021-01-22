// import React, { Component } from 'react'
import React, { PureComponent } from 'react'

export default class OffSpring extends PureComponent {
  // shouldComponentUpdate (nextState, nextProps) {
  //   return !this.props.carName === nextProps.carName
  // }
  render () {
    return (
      <div className="off-spring">
        <span>我接到的车是: {this.props.carName}</span>
      </div>
    )
  }
}
