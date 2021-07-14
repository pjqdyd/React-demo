import RouteLoadable from '../../loadable/RouteLoadable'

const routes = [
  {
    name: '用户页',
    path: '/user',
    auth: true,
    exact: true,
    component: RouteLoadable(import('@/pages/User')),
    // 如果此种方式再嵌套一层子路由，那么需要在User页面，渲染出子路由{renderRoutes(this.props.route.children)}
    // children: [
    //   {
    //     name: '用户详情页',
    //     path: '/user/details',
    //     auth: true,
    //     component: RouteLoadable(import('@/pages/User/Details')),
    //   },
    // ],
  },
  {
    name: '用户详情页',
    path: '/user/details',
    auth: true,
    component: RouteLoadable(import('@/pages/User/Details')),
  },
]
export default routes
