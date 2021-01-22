import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

export default class FadeOut extends Component {
  state = {
    opacity: 1
  }
  // handleStop = () => {
  //   // 卸载组件
  //   ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  // }
  handleStop = () => {
    clearInterval(this.intervalId)
  }
  handleStart = () => {
    clearInterval(this.intervalId)
    this.intervalId = setInterval(() => {
      let { opacity } = this.state
      opacity -= 0.1
      if (opacity <= 0) {
        opacity = 1
      }
      this.setState({
        opacity
      })
    }, 200)
  }
  // 组件挂载完毕
  componentDidMount () {
    this.intervalId = setInterval(() => {
      // 获取原始状态
      let { opacity } = this.state
      // 减少0.1
      opacity -= 0.1
      if (opacity <= 0) {
        opacity = 1
      }
      // 设置新的透明度
      this.setState({
        opacity
      })
    }, 200)
  }
  // 组件将要卸载
  componentWillUnmount () {
    // 清除定时器
    clearInterval(this.intervalId)
  }
  render () {
    const { opacity } = this.state
    return (
      <div className="fade-out">
        <h2 style={{opacity}}>react太难了</h2>
        <button onClick={this.handleStop}>衰亡了</button>
        <button onClick={this.handleStart}>复活了</button>
      </div>
    )
  }
}

