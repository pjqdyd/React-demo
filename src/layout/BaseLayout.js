import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import renderRoutes from '@/router/renderRoutes'
import s from './styles/index.module.scss'

/**
 * 基础页面布局组件
 * @returns {JSX.Element}
 */
class BaseLayout extends PureComponent {
  render() {
    return (
      <div className={s.layout}>
        <nav className={s.nav}>
          <Link className={s.link} to="/home">
            首页
          </Link>
          <Link className={s.link} to="/user">
            用户
          </Link>
          <Link className={s.link} to="/login">
            登录
          </Link>
        </nav>
        <div className={s.container}>{renderRoutes(this.props.route.children)}</div>
      </div>
    )
  }
}

export default BaseLayout
