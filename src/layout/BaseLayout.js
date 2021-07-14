import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import s from './styles/index.module.scss'

/**
 * 基础页面布局组件
 * @returns {JSX.Element}
 */
class BaseLayout extends PureComponent {
  render() {
    return (
      <div>
        <nav className={s.nav}>
          <Link className={s.link} to="/home">
            首页
          </Link>
          <Link className={s.link} to="/login">
            登录
          </Link>
          <Link className={s.link} to="/user">
            用户中心
          </Link>
        </nav>
        {renderRoutes(this.props.route.children)}
      </div>
    )
  }
}

export default BaseLayout
