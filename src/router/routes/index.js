import BaseLayout from '@/layout/BaseLayout'
import NoPage from '@/layout/error/NoPage'
import login from './login'
import home from './home'
import user from './user'

/**
 * 集中路由
 */
const router = [
  /**===============不需要BaseLayout的页面=============**/
  ...login,
  /**===============需要BaseLayout的页面===============**/
  {
    path: '/',
    // exact: true, // 嵌套路由,不能在父级加exact(精准匹配),因为先要匹配父级然后才能匹配子集
    component: BaseLayout,
    children: [
      ...home,
      ...user,
      {
        path: '*',
        component: NoPage,
      },
    ],
  },
  {
    path: '*',
    component: NoPage,
  },
]

export default router
