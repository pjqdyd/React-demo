import React from 'react'
import s from './index.module.scss'

/**
 * 首页
 */
export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className={s.container}>
        <div className={s.homeBox}>Home Page</div>
      </div>
    )
  }
}
