import React, { Component } from 'react'

export default class UseSetState extends Component {
  state = {
    count: 0
  }
  increment = () => {
    // 对象式的setState
    // const { count } = this.state  // 获取原来的值
    // this.setState({ count: count + 1 }, () => {  // 更新状态
    //   console.log(this.state.count)
    // })
    
    // 函数式的setState
    this.setState((state, props) => ({ count: state.count + 1 }))
  }
  render () {
    return (
      <div className="use-set-state">
        <h1>当前和为: {this.state.count}</h1>
        <button onClick={this.increment}>点我+1</button>
      </div>
    )
  }
}
