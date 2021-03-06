// 引入createStore，专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware } from 'redux'
// 引入汇总之后的reducer
import reducer from './reducers'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
// 引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'

export default createStore(
  reducer,
  // 应用异步中间件 
  composeWithDevTools(applyMiddleware(thunk))
)
