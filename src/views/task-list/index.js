import React, { Component } from 'react'
import Person from '../person'

export default class TaskList extends Component {
  render () {
    const human1 = {
      name: '小红',
      age: 20,
      sex: '女'
    }
    const human2 = {
      name: '小明'
    }
    return (
      <div className="task-list">
        <Person name={human1.name} age={human1.age} sex={human1.sex}></Person>
        <Person {...human1}></Person>
        <Person name={human2.name}></Person>
      </div>
    )
  }
}

