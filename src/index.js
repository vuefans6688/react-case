import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './router'
import { Provider } from 'react-redux'          
import store from './redux/store'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  // 此处需要用Provider包裹App，目的是让App所有的后代容器组件都能接收到store
  <Provider store={store}>
    <BrowserRouter>
      <App />
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

