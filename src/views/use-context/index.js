import React, { Component } from 'react'
import Parent from './parent'
import { pluginContext } from './manage-context'

export default class UseContext extends Component {
  state = {
    username: 'Terry',
    age: 20
  }
  render () {
    const { username, age } = this.state
    return (
      <div className="use-context">
        <h4>用户名是: {username}, 年龄: {age}</h4>
        <pluginContext.Provider value={{username, age}}>
          <Parent />
        </pluginContext.Provider>        
      </div>
    )
  }
}
