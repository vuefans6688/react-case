import React, { Component } from 'react'
import PropTypes from 'prop-types'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
// 引入action
import { increment, decrement, incrementAsync } from '../../redux/actions/scaler'

class Scaler extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
  }
  increment = () => {
    // 得到选择增加数量
    const number = this.select.value * 1
    // 调用store的方法更新状态
    this.props.increment(number)
  }
  decrement = () => {
    // 得到选择增加数量
    const number = this.select.value * 1
    const { count } = this.props
    if (count > 0) {
      this.props.decrement(number)
    }
  }
  incrementOdd = () => {
    // 得到选择增加数量
    const number = this.select.value * 1
    // 得到原本的count状态
    const { count } = this.props
    // 判断count是否是奇数
    if (count % 2 === 1) {
      // 调用store的方法更新状态
      this.props.increment(number)
    }
  }
  incrementAsync = () => {
    // 得到选择增加数量
    const number = this.select.value * 1
    // 启动延时定时器，更新状态
    this.props.incrementAsync(number)
  }
  render () {
    const { count } = this.props
    return (
      <div className="scaler">
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

// 使用connect()()创建并暴露一个Scaler的容器组件
export default connect(
  // mapStateToProps映射状态，返回值是一个对象
  state => ({ count: state.scaler }),

  // mapDispatchToProps映射操作状态的方法，返回值是一个对象
  // mapDispatchToProps的一般写法
  // dispatch => ({
  //   increment: data => dispatch(increment(data)),
  //   decrement: data => dispatch(decrement(data)),
  //   incrementAsync: data => dispatch(incrementAsync(data))
  // })
  
  // mapDispatchToProps的简写
  { increment, decrement, incrementAsync }
)(Scaler)