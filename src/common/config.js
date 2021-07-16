// 全局默认配置

// 环境env
const env = process.env.REACT_APP_ENV || 'dev'

// 服务地址
const serverUrl = {
  dev: 'http://127.0.0.1:8000', // 开发环境
  test: 'http://127.0.0.1:8000', // 测试环境
  pre: 'http://127.0.0.1:8000', // 预生产环境
  prod: 'http://127.0.0.1:8000', // 生产环境
}[env]

// 接口基础路径，用作http请求代理
const baseUrl = {
  dev: '/dev', // 开发环境
  test: '/test', // 测试环境
  pre: '/pre', // 预生产环境
  prod: '/prod', // 生产环境
}[env]

// Mock地址
const mockBaseUrl = '/mock'
const mockServerUrl = 'https://www.fastmock.site/mock/f48d6c1da53db1dd5b204b4a4d5673fe/test'

module.exports = { serverUrl, baseUrl, mockBaseUrl, mockServerUrl }
