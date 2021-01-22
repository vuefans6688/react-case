import React, { Component } from 'react'
import './index.scss'

export default class Footer extends Component {
  // 全选checkbox的回调
  handleCheckAll = event => {
    this.props.checkAllTodo(event.target.checked)
  }
  // 清除已完成任务的回调
  handleClearAllDone = () => {
    this.props.clearAllDone()
  }
  render () {
    const { todos } = this.props
    // 已完成的个数
    // const doneCount = todos.reduce((pre, cur) => pre + (cur.done ? 1 : 0), 0)
    const doneCount = todos.reduce((pre, cur) => {
      if (cur.done) {
        return pre + 1 
      } else {
        return pre
      }
    }, 0)
    // 全部总数
    const todoTotal = todos.length
    // 是否全选
    const isCheckedAll = doneCount === todoTotal && todoTotal !== 0 ? true : false
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={isCheckedAll} onChange={this.handleCheckAll} />
        </label>
        <span>已完成{doneCount} / 全部{todoTotal}</span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
