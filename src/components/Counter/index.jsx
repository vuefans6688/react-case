import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0
  }
  increment = () => {
    // 得到选择增加数量
    const number = this.select.value * 1
    // 得到原本的count状态
    const count = this.state.count
    // 更新状态
    this.setState({
      count: count + number
    })
  }
  decrement = () => {
    // 得到选择增加数量
    const number = this.select.value * 1
    // 得到原本的count状态
    let count = this.state.count
    // 更新状态
    if (count < 1) {
      count = 1
    }
    this.setState({
      count: count - number
    })
  }
  incrementOdd = () => {
    // 得到选择增加数量
    const number = this.select.value * 1
    // 得到原本的count状态
    const count = this.state.count
    // 判断，满足条件更新状态
    if (count % 2 === 1) {
      // 更新状态
      this.setState({
        count: count + number
      })
    }
  }
  incrementAsync = () => {
    // 得到选择增加数量
    const number = this.select.value * 1
    // 得到原本的count状态
    const count = this.state.count
    // 启动延时定时器 更新状态
    setTimeout(() => {
      this.setState({
        count: count + number
      })
    }, 1000)
  }
  render () {
    const { count } = this.state
    return (
      <div className="count">
        <p>点击{count}次</p>
        <p>
          <select ref={select => this.select = select}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>&nbsp;
          <button onClick={this.increment}>+</button>&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;
          <button onClick={this.incrementOdd}>奇数递增</button>&nbsp;
          <button onClick={this.incrementAsync}>异步递增</button>&nbsp;
        </p>
      </div>
    )
  }
}

export default Counter