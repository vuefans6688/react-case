import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
// import Top from '../../components/Top'
// import Main from '../../components/Main'
import ShareNavLink from '../../components/ShareNavLink'
import './index.scss'

// 路由懒加载
const Top = lazy(() => import('../../components/Top'))
const Main = lazy(() => import('../../components/Main'))

export default class About extends Component {
  render () {
    return (
      <div className="about">
        <BrowserRouter>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/* 编写路由 */}
                <ShareNavLink to="/top">Top</ShareNavLink>
                <ShareNavLink to="/main">Main</ShareNavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/* 注册路由 */}
                  <Suspense fallback={<h2>加载中...</h2>}>
                    <Route path="/top" component={Top} />
                    <Route path="/main" component={Main} />
                    <Redirect to="/top" />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

 