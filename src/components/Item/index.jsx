import React, { Component } from 'react'
import './index.scss'

export default class Item extends Component {
  state = {
    isShift: false  // 标识鼠标移入、移出
  }
  // 鼠标移入、移出的回调
  handleMouse = flag => {
    return () => {
      this.setState({
        isShift: flag  
      })
    }
  }
  // 勾选、取消勾选某一个todo的回调
  handleCheck = id => {
    return event => {
      this.props.updateTodo(id, event.target.checked)
    }
  }
  // 删除一个todo的回调
  handleDelete = id => {
    if (window.confirm('确定删除吗?')) {
      this.props.deleteTodo(id)
    }
  }
  render () {
    const { id, name, done } = this.props
    const { isShift } = this.state
    const display = isShift ? 'block' : 'none'
    return (
      <div className="item">
        <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}
          style={{backgroundColor: isShift ? '#eee' : ''}}>
          <label>
            <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
            <span>{name}</span>
          </label>
          <button onClick={() => this.handleDelete(id)} style={{display}} className="btn btn-danger">删除</button>
        </li>
      </div>
    )
  }
}
