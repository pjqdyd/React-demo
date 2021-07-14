import Loadable from 'react-loadable'
import RouteLoading from './RouteLoading'

/**
 * 路由懒加载组件
 * @param loader: 页面组件
 * @param loading: Component 加载组件
 * @returns {*}
 */
const RouteLoadable = (loader, loading = RouteLoading) => {
  return Loadable({
    loader: () => loader,
    loading: loading,
    delay: 200,
    timeout: 10000,
  })
}

export default RouteLoadable
