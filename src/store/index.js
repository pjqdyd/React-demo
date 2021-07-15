/**
 * 使用rematch简化redux使用
 */
import { init } from '@rematch/core'
import models from './loader'

const configStore = () =>
  init({
    models,
  })
const store = configStore()
export default store
