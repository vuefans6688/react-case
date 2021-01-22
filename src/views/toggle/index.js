import React, { Component } from 'react'

export default class Toggle extends Component {
  constructor (props) {
    super(props)
    // 初始化状态
    this.state = {
      isLike: false
    }
    // 将新增方法中的this强制绑定为组件对象
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    // 得到状态并取反
    const isLike = !this.state.isLike
    // 更新状态
    this.setState({ isLike  })
  }
  // 新添加方法内部的this默认不是组件对象，而是undefined
  // handleClick = () => {
  //   // 得到状态并取反
  //   const isLike = !this.state.isLike
  //   // 更新状态
  //   this.setState({ isLike  })
  // }
  render () {
    // 读取状态
    const { isLike } = this.state
    return (
      <div onClick={this.handleClick} className="toggle">{isLike ? '喜欢' : '不喜欢'}</div>
    )
  }
}

