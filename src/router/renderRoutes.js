import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

const authPath = '/login' // 未登录跳转路径

/**
 * 渲染路由的函数组件
 * @param routes 路由配置数组
 * @param extraProps 额外的路由组件属性
 * @param switchProps Switch组件的属性
 * @returns {JSX.Element}
 */
const renderRoutes = (routes = [], extraProps = {}, switchProps = {}) => {
  const isLogin = true // 是否登录，从redux中获取登录状态

  return (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={(props) => {
            // 如果不需要登录认证，或者已登录 (路由拦截)
            if (!route.auth || isLogin) {
              return <route.component {...props} {...extraProps} route={route} />
            }
            // 重定向到登录页，记录从哪个页面跳过来
            // 登录页： const { from } = this.props.location.state || { from: { pathname: '/' } }
            // 登录页： this.props.history.push(from.pathname)
            return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
          }}
        />
      ))}
    </Switch>
  )
}

export default renderRoutes
