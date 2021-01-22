import React, { Component } from 'react'

export default class FormSubmit extends Component {
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
  // 函数柯里化
  // handleChange = key => {
  //   return event => {
  //     // 更新状态
  //     this.setState({
  //       [key]: event.target.value
  //     })
  //   }
  // }

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
    return (
      <div className="login-form">
        <form action="https://www.bilibili.com" onSubmit={this.handleSubmit}>
          {/* 用户名: <input type="text" name="username" onChange={this.handleChange('username')} /> */}
          {/* &nbsp; */}
          {/* 密码: <input type="password" name="password" onChange={this.handleChange('password')} /> */}

          用户名: <input onChange={event => this.handleChange('username', event)} name="username" type="text" />
          &nbsp;
          密码: <input onChange={event => this.handleChange('password', event)} name="password" type="password" />
          &nbsp;
          <input type="submit" value="提交" />
          <input type="button" value="重置" onClick={this.handleReset} />
        </form>
      </div>
    )
  }
}


 