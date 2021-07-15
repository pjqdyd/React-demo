import { jsonToObj } from './util'

//封装处理localstorage缓存的工具, 并导出模块为storage
const storage = {
  save(key, value) {
    if (typeof value == 'object' && value) {
      localStorage.setItem(key, JSON.stringify(value))
    } else {
      localStorage.setItem(key, value)
    }
  },
  get(key, defaultValue = {}) {
    return jsonToObj(localStorage.getItem(key)) || defaultValue
  },
  remove(key) {
    localStorage.removeItem(key)
  },
  clear() {
    localStorage.clear()
  },
}

export default storage
