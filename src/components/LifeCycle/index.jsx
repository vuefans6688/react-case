import React, { Component } from 'react'

class LifeCycle extends Component {
  constructor (props) {
    console.log('constructor')
    super(props)
  }
  // 组件将要挂载的钩子
  componentDidMount () {
    console.log('componentDidMount')
  }
  // 组件挂载完毕的钩子
  componentWillMount () {
    console.log('componentWillMount')
  }
  // 组件将要卸载的钩子
  componentWillUnmount () {
    console.log('componentWillUnmount')
  }
  // 控制组件更新的“阀门”
  shouldComponentUpdate () {
    console.log('shouldComponentUpdate')
    return true
  }
  // 组件将要更新的钩子
  componentWillUpdate () {
    console.log('componentWillUpdate')
  }
  // 组件更新完毕的钩子
  componentDidUpdate (preProps, preState, snapshotValue) {
    console.log('componentDidUpdate', preProps, preState, snapshotValue)
  }
  // 组件将要接收属性的钩子
  componentWillReceiveProps () {
    console.log('componentWillReceiveProps')
  }
  // 18.0.1版本中的生命周期函数
  UNSAVE_componentWillUpdate () {
    console.log('UNSAVE_componentWillUpdate')
  }
  // 18.0.1版本中的生命周期函数
  UNSAVE_componentWillMount () {
    console.log('UNSAVE_componentWillMount')
  }
  // 18.0.1版本中的生命周期函数
  UNSAVE_componentWillReceiveProps () {
    console.log('UNSAVE_componentWillReceiveProps')
  }
  // 18.0.1版本中的生命周期函数
  // 若state的值在任何时候都取决于props，那么可以使用getDerivedStateFromProps
  static getDerivedStateFromProps (props, state) {
    // console.log('getDerivedStateFromProps', props, state)
    // return props
    return null
  }
  // 18.0.1版本中的生命周期函数
  // 在更新之前获取快照
  getSnapshotBeforeUpdate () {
    console.log('getSnapshotBeforeUpdate')
    return null
  }
  render () {
    console.log('render')
    return (
      <div className="life-cycle">组件生命周期</div>
    )
  }
}

export default LifeCycle