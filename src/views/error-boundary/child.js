import React, { Component } from 'react'

export default class Child extends Component {
  state = {
    // users: [
    //   { id: '001', name: 'Tom', age: 20 },
    //   { id: '002', name: 'Jerry', age: 20 },
    //   { id: '003', name: 'Tracy', age: 19 }
    // ]
    users: 'Welcome to react'
  }
  render () {
    const { users } = this.state
    return (
      <div className="child">
        {
          users.map(user => <h4 key={user.id}>{user.name}---{user.age}</h4>)
        }
      </div>
    )
  }
}
