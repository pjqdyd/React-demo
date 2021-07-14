import RouteLoadable from '../../loadable/RouteLoadable'

const routes = [
  {
    name: '首页',
    path: '/home',
    component: RouteLoadable(import('@/pages/Home')),
  },
]
export default routes
