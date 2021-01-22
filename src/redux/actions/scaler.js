import { INCREMENT, DECREMENT } from '../../redux/action-types'

// 同步action返回的是一个对象
export const increment = data => ({ type: INCREMENT,  data })
// 同步action返回的是一个对象
export const decrement = data => ({ type: DECREMENT, data })
// 异步action返回的是一个函数，异步action中一般都会调用同步action
// 异步action不是必须要用的
export const incrementAsync = data => {
  return dispatch => {
    // 1s之后去分发一个increment的action
    setTimeout(() => {
      dispatch(increment(data))
    }, 1000)
  }
}