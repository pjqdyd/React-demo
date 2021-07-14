import RouteLoadable from '@/router/loadable/RouteLoadable'

const routes = [
  {
    name: '首页',
    path: '/',
    exact: true,
    auth: true,
    component: RouteLoadable(import('@/pages/Home')),
  },
  {
    name: '首页',
    path: '/home',
    auth: true,
    component: RouteLoadable(import('@/pages/Home')),
  },
]
export default routes
