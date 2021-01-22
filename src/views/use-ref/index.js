import React, { Component } from 'react'

export default class UseRef extends Component {
  // React.createRef调用后可以返回一个容器，该容器可以存储被ref所标识的节点，该容器是”专人专用“的
  pluginRef = React.createRef()
  showData = () => {
    console.log(this.pluginRef.current.value)
  }
  render () {
    return (
      <div className="use-ref">
        <input type="text" placeholder="点击按钮提示数据" ref={this.pluginRef} />
        &nbsp;
        <button onClick={this.showData}>点我提示左侧的数据</button>
      </div>
    )
  }
}