import React, { Component } from 'react'
import ShareNavLink from '../../components/ShareNavLink'
import { Route, Switch, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import News from './news'
import Message from './message'

class First extends Component {
  back = () => {
    this.props.history.goBack()
  }
  forward = () => {
    this.props.history.goForward()
  }
  goes = () => {
    this.props.history.go(2) 
  }
  render () {
    return (
      <div className="first">
        <h3>我是First的内容</h3>
        <ul className="nav nav-tabs">
          <li>
            <ShareNavLink to="/first/news">新闻</ShareNavLink>
          </li>
          <li>
            <ShareNavLink to="/first/message">消息</ShareNavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/first/news" component={News} />
          <Route path="/first/message" component={Message} />
          <Redirect to="/first/news" />
        </Switch>

        <button onClick={this.back}>回退</button>
        <button onClick={this.forward}>前进</button>
        <button onClick={this.goes}>Go</button>
      </div>
    )
  }
}

// withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
// withRouter的返回值是一个新组件
export default withRouter(First)
