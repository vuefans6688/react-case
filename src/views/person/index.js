import React, { Component } from 'react'
import PropTypes from 'prop-types'

// 类式组件(复杂组件)
export default class Person extends Component {
  // 指定标签属性默认值
  static defaultProps = {
    sex: '男',
    age: 21
  }
  // 指定标签属性值的类型和必要性
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
  }
  render () {
    const { name, age, sex } = this.props
    return (
      <div className="person">
        <ul>
          <li>姓名: {name}</li>
          <li>年龄: {age}</li>
          <li>性别: {sex}</li>
        </ul>
      </div>
    )
  }
}

// 函数式组件(简单组件)
// function Person(props) {
//  // 此处的this是undefined，因为babel编译后开启了严格模式
//   console.log(this)
//   return (
//     <div className="person">
//       <ul>
//         <li>姓名: {props.name}</li>
//         <li>年龄: {props.age}</li>
//         <li>性别: {props.sex}</li>
//       </ul>
//     </div>
//   )
// }

// // 指定标签属性默认值
// Person.defaultProps = {
//   sex: '男',
//   age: 21
// }

// // 指定标签属性值的类型和必要性
// Person.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number
// }