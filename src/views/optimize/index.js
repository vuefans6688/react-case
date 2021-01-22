// import React, { Component } from 'react'
import React, { PureComponent } from 'react'
import OffSpring from './off-spring'

export default class Optimize extends PureComponent {
  state = {
    carName: '奔驰C63'
  }
  changeCar = () => {
    this.setState({
      carName: '劳斯莱斯'
    })
  }
  // 传入要变化的目标state、props
  // shouldComponentUpdate (nextState, nextProps) {
  //   return this.state.carName === nextState.carName ? false : true
  // }
  render () {
    const { carName } = this.state
    return (
      <div className="optimize">
        <span>我的车是: {carName}</span>
        <button onClick={this.changeCar}>点我换车</button>
        <OffSpring carName="迈巴赫" />
      </div>
    )
  }
}
