// 该文件用于汇总所有的reducer为一个总的reducer 

// 引入为Scaler组件服务的reducer
import { scaler } from './scaler'
// 引入为Human组件服务的reducer
import { human } from './human'
// 引入combineReducers，用于结合多个reducer
import { combineReducers } from 'redux'

// 汇总所有的reducer变为一个总的reducer
export default combineReducers({
  scaler,
  human
})

