import RouteLoadable from '../../loadable/RouteLoadable'

const routes = [
  {
    name: '登录页',
    path: '/login',
    auth: false,
    component: RouteLoadable(import('@/pages/Login')),
  },
]
export default routes
