import React, { PureComponent } from 'react'

/**
 * 登录页
 */
export default class Login extends PureComponent {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    console.log('登录页: from', from)
    // 登录页： this.props.history.push(from.pathname)
  }

  render() {
    return <div>Login Page</div>
  }
}
