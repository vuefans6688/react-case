import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { addHuman } from '../../redux/actions/human'
import './index.scss'

class Human extends Component {
  addHuman = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value * 1
    const humanObject = {
      id: nanoid(),
      name,
      age
    }
    this.props.addHuman(humanObject)
    this.nameNode.value = ''
    this.ageNode.value = ''
  }
  render () {
    const { peoples } = this.props
    return (
      <div className="human">
        名字: <input ref={input => this.nameNode = input} type="text" placeholder="请输入名字" />
        年龄: <input ref={input => this.ageNode = input} type="text" placeholder="请输入年龄" />
        <button onClick={this.addHuman}>添加</button>
        <ul>
          {
            peoples.map(people => <li key={people.id}>名字: {people.name} 年龄: {people.age}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  // 映射状态
  state => ({ peoples: state.human }),
  // 映射操作状态的方法
  { addHuman }
)(Human)
