import { ADD_HUMAN } from '../action-types'

// 初始化人的列表
const initState = [
  { id: '001', name: 'Lucy', age: 20 }
]

export function human(state = initState, action) {
  const { type, data } = action
  switch (type) {
    // 若添加一个人
    case ADD_HUMAN:
      // state.unshift(data)  // 此处不可以这样写，这样会导致state被改写，human就不是纯函数了
      // return state
      return [data, ...state]
    default:
      return state
  }
}