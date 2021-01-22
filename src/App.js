import './App.scss'
import React, { Component } from 'react'
// import { Switch, Route, Redirect } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import Home from './views/home'
import Detail from './views/home/detail'
import About from './views/about'
import Find from './views/find'
import My from './views/my'
import ShareNavLink from './components/ShareNavLink/index'

export default class App extends Component {
  render () {
    return (
      <div id="App">
        {/* 在react中靠路由链接实现切换组件 */}
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/find" component={Find}></Route>
          <Route path="/my" component={My}></Route>
          <Route path="/detail/:id" component={Detail}></Route>
          {/* <Route path="/detail" component={detail}></Route> */}
          {/* <Redirect to="/home"></Redirect> */}
        </Switch>
        <div className="footer">
          <ShareNavLink to="/home">首页</ShareNavLink>
          <ShareNavLink to="/about">关于</ShareNavLink>
          <ShareNavLink to="/find">发现</ShareNavLink>
          <ShareNavLink to="/my">我的</ShareNavLink>
        </div>
      </div>
    )
  }
}




