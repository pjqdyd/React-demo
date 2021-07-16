const { createProxyMiddleware } = require('http-proxy-middleware')
const config = require('./common/config')

/**
 * 本地代理配置
 */
module.exports = function (app) {
  const { serverUrl, baseUrl, mockBaseUrl, mockServerUrl } = config
  app.use(
    createProxyMiddleware(`${baseUrl + mockBaseUrl}`, {
      target: mockServerUrl,
      changeOrigin: true,
      pathRewrite: {
        [`^${baseUrl + mockBaseUrl}`]: '',
      },
    })
  )
  app.use(
    createProxyMiddleware(baseUrl, {
      target: serverUrl,
      changeOrigin: true,
      pathRewrite: {
        [`^${baseUrl}`]: '',
      },
    })
  )
}
