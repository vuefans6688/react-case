import React, { Component } from 'react'
import Header from '../../components/Header'
import List from '../../components/List'
import Footer from '../../components/Footer'
import './index.scss'

export default class Students extends Component {
  // 状态在哪里，操作状态的方法就在哪里
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '敲代码', done: false }
    ]
  }
  // addTodo用于添加一个todo对象
  addTodo = todo => {
    // 获取原来的todos
    const { todos } = this.state
    // 追加一个todo
    const newTodos = [todo, ...todos]
    // 更新状态
    this.setState({
      todos: newTodos
    })
  }
  // updateTodo用于更新一个todo对象
  updateTodo = (id, done) => {
    const { todos } = this.state
    // 匹配处理数据
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          done
        }
      } else {
        return todo
      }
    })
    this.setState({
      todos: newTodos
    })
  }
  // deleteTodo用于删除一个todo对象
  deleteTodo = id => {
    // 获取原来的todos
    const { todos } = this.state
    // 删除指定id的todo对象
    const newTodos = todos.filter(todo => todo.id !== id)
    // 更新状态
    this.setState({
      todos: newTodos
    })
  }
  // checkAllTodo用于全选
  checkAllTodo = done => {
    // 获取原来的todos
    const { todos } = this.state
    // 加工数据
    const newTodos = todos.map(todo => {
      return {
        ...todo,
        done
      }
    })
    // 更新状态
    this.setState({
      todos: newTodos
    })
  }
  // clearAllDone用于清除所有已完成的
  clearAllDone = () => {
    // 获取原来的todos
    const { todos } = this.state
    // 过滤数据
    const newTodos = todos.filter(todo => !todo.done)
    // 更新状态
    this.setState({
      todos: newTodos
    })
  }
  render () {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
        </div>
      </div>
    )
  }
}
