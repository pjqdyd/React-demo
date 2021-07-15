// 全局默认配置
const baseUrl = {
  dev: 'http://127.0.0.1:8000', // 开发环境
  test: '', // 测试环境
  pre: '', // 预生产环境
  prod: '', // 生产环境
}[process.env.REACT_APP_ENV]

export { baseUrl }
