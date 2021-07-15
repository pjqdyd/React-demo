/**
 * 模块化自动导入
 */
const files = require.context('./models', false, /\.js$/)
const models = {}
files.keys().forEach((key) => {
  const filename = key.replace(/(\.\/|\.js)/g, '')
  models[filename] = files(key).default
})
export default models
