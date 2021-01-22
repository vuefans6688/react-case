import React from 'react'
import ReactDOM from 'react-dom'

// 类式组件
class Hooks extends React.Component {
  state = {
    count: 0
  }
  assemblyRef = React.createRef()
  add = () => {
    this.setState((state, props) => ({ count: state.count + 1 }))
  }
  unmount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  componentDidMount () {  
    this.intervalId = setInterval(() => {
      this.setState((state, props) => ({ count: state.count + 1 }))
    }, 1000)
  }
  componentWillUnmount () {
    clearInterval(this.intervalId)
  }
  showData = () => {
    alert(this.assemblyRef.current.value)
  }
  render () {
    return (
      <div className="hooks">
        <input type="text" ref={this.assemblyRef} />
        <h2>当前数值是: {this.state.count}</h2>
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.unmount}>卸载组件</button>
        <button onClick={this.showData}>点击提示数据</button>
      </div>
    )
  }
}

// 函数式组件
// function Hooks() {
//   const [count, setCount] = React.useState(0)
//   const assemblyRef = React.useRef()
//   React.useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCount(count => count + 1)
//     }, 1000)
//     return () => {
//       clearInterval(intervalId)
//     }
//   }, [count])  // [count] 监测count的变化，数组参数可选
//   // 加法的回调
//   function add() {
//     // setCount(count + 1)  // 第一种写法
//     setCount(count => count + 1)  // 第二种写法
//   }
//   // 卸载组件的回调
//   function unmount() {
//     ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//   }
//   // 提示输入的回调
//   function showData() {
//     alert(assemblyRef.current.value)
//   }
//   return (
//     <div className="hooks">
//       <input type="text" ref={assemblyRef} />
//       <h2>当前数值是: {count}</h2>
//       <button onClick={add}>点我+1</button>
//       <button onClick={unmount}>卸载组件</button>
//       <button onClick={showData}>点击提示数据</button>
//     </div>
//   )
// }

export default Hooks
