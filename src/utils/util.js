// 公共的方法

// jsonToObj方法
export function jsonToObj(str) {
  if (typeof str == 'string') {
    try {
      let obj = JSON.parse(str)
      if (typeof obj == 'object' && obj) {
        return obj
      }
    } catch (e) {
      console.log(e)
    }
  }
  return str
}
