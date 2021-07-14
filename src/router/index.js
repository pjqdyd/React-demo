import BaseLayout from '../layout/BaseLayout'
import login from './routers/login'
import home from './routers/home'
import user from './routers/user'

/**
 * 集中路由
 */
const router = [
  /**===============不需要BaseLayout的页面=============**/
  ...login,
  /**===============需要BaseLayout的页面===============**/
  {
    path: '/',
    component: BaseLayout,
    children: [...home, ...user],
  },
]

export default router
