// import { get, post } from '@/utils/request'
import storage from '@/utils/storage'

// 用户store
export default {
  state: {
    count: 0,
    // userInfo: {},
    userInfo: storage.get('USER_INFO', {}), // 初始时从localStorage中获取
  },
  reducers: {
    // 从第二个变量开始为调用时传递进来的参数, 同步执行
    addCount: (state, num) => {
      return {
        ...state,
        count: state.count + num,
      }
    },
    updateState: (state, payload) => {
      return {
        ...state,
        ...payload,
      }
    },
  },
  effects: (dispatch) => ({
    // 执行异步函数
    fetchUserInfoAsync: async (payload, rootState) => {
      // const data = await get(`/user/info`, payload)
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          let res = { username: '张三', age: Math.round(Math.random() * 100), params: payload }
          resolve(res)
        }, 1000)
      })
      dispatch.user.updateState({ userInfo: data })
      storage.save('USER_INFO', data) // 并存储在本地localStorage中
      console.log(payload, rootState)
    },
  }),
}
