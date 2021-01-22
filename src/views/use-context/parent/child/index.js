import React, { Component } from 'react'
// import React from 'react'
import { pluginContext } from '../../manage-context'

// 类式组件
export default class Child extends Component {
  static contextType = pluginContext
  render () {
    const { username, age } = this.context
    return (
      <div className="child">
        <h4>我是从UseContext组件接收到的用户名: {username}, 年龄: {age}</h4>
      </div>
    )
  }
}

// 函数式组件
// const { Consumer } = pluginContext
// function Child() {
//   return (
//     <div className="child">
//       <h4>
//         <Consumer>
//           {
//             value => <span>我是从UseContext组件接收到的用户名: {value.username}, 年龄: {value.age}</span>
//           }
//         </Consumer>
//       </h4>
//     </div>
//   )
// }

// export default Child
