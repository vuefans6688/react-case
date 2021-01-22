import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './detaill'

export default class Message extends Component {
  state = {
    messageArray: [
      { id: '01', title: '消息1' },
      { id: '02', title: '消息2' },
      { id: '03', title: '消息3' }
    ]
  }
  replaceShow = (id, title) => {
    // replace跳转，携带params参数
    // this.props.history.replace(`/first/message/detail/${id}/${title}`)

    // replace跳转，携带search参数
    // this.props.history.replace(`/first/message/detail?id=${id}&title=${title}`)

    // replace跳转，携带state参数
    this.props.history.replace('/first/message/detail', { id, title })
  }
  pushShow = (id, title) => {
    // push跳转，携带params参数
    // this.props.history.push(`/first/message/detail/${id}/${title}`)

    // push跳转，携带search参数
    // this.props.history.push(`/first/message/detail?id=${id}&title=${title}`)

    // push跳转，携带state参数
    this.props.history.push('/first/message/detail', { id, title })
  }
  back = () => {
    this.props.history.goBack()
  }
  forward = () => {
    this.props.history.goForward()
  }
  goes = () => {
    this.props.history.go(2)  // 2表示前进两步
  }
  render () {
    const { messageArray } = this.state
    return (
      <div className="message">
        <ul>
          {
            messageArray.map(message => 
              <li key={message.id}>
                {/* 编程式路由导航 */}
                {/* 向路由组件传递params参数 */}
                {/* <Link to={`/first/message/detail/${message.id}/${message.title}`}>{message.title}</Link> */}
                {/* &nbsp;<button onClick={() => this.pushShow(message.id, message.title)}>push查看</button>
                &nbsp;<button onClick={() => this.replaceShow(message.id, message.title)}>replace查看</button> */}

                {/* 向路由组件传递search参数 */}
                {/* <Link to={`/first/message/detail/?id=${message.id}&title=${message.title}`}>{message.title}</Link> */}
                {/* &nbsp;<button onClick={() => this.pushShow(message.id, message.title)}>push查看</button> */}
                {/* &nbsp;<button onClick={() => this.replaceShow(message.id, message.title)}>replace查看</button> */}
                
                {/* 向路由组件传递state参数 */}
                <Link replace to={{pathname: '/first/message/detail', state: {id: message.id, title: message.title}}}>{message.title}</Link>
                &nbsp;<button onClick={() => this.pushShow(message.id, message.title)}>push查看</button>
                &nbsp;<button onClick={() => this.replaceShow(message.id, message.title)}>replace查看</button>
                
              </li>
            )
          }
        </ul>
        <hr/>
        {/* 声明接收params参数 */}
        {/* <Route path="/first/message/detail/:id/:title" component={Detail} /> */}

        {/* search参数无需声明接收，正常注册路由即可 */}
        {/* <Route path="/first/message/detail" component={Detail} /> */}

        {/* state参数无需声明接收，正常注册路由即可 */}
        <Route path="/first/message/detail" component={Detail} />
        <button onClick={this.back}>回退</button>
        <button onClick={this.forward}>前进</button>
        <button onClick={this.goes}>Go</button>
      </div>
    )
  }
}
