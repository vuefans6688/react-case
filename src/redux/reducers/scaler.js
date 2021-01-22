// 该文件是用于创建一个为Scaler组件服务的reducer，reducer的本质就是一个函数
// reducer函数会接到两个参数，分别为：之前的状态(state)、动作对象(action) 

import { INCREMENT, DECREMENT } from '../action-types'

export function scaler(state = 0, action) {
  // 从action对象中获取type、data，根据type决定如何加工数据
  switch (action.type) {
    // 如果是加
    case INCREMENT:
      return state + action.data
    // 如果是减 
    case DECREMENT:
      return state - action.data
    default:
      return state
  }
}