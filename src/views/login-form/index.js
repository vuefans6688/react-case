import React, { Component } from 'react'

export default class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  }
  handleSubmit = event => {
    // 阻止事件的默认行为
    event.preventDefault()
    const { username, password } = this.state
    console.log(`用户名: ${username}, 密码: ${password}`)
  }
  handleChange = (key, event) => {
    // 更新状态
    this.setState({
      [key]: event.target.value
    })
  }
  handleReset = () => {
    // 清空表单
    this.setState({
      username: '',
      password: ''
    })
  }
  render () {
    const { username, password } = this.state
    return (
      <div className="login-form">
        <form onSubmit={this.handleSubmit} action="https://www.bilibili.com">
          用户名: <input onChange={this.handleChange.bind(this, 'username')} value={username} type="text" />
          &nbsp;
          密码: <input onChange={this.handleChange.bind(this, 'password')} value={password} type="password" />
          &nbsp;
          <input type="submit" value="提交" />
          <input type="button" value="重置" onClick={this.handleReset} />
        </form>
      </div>
    )
  }
}
