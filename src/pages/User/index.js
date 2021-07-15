import React, { PureComponent } from 'react'
import UserForm from './components/Form'

/**
 * 用户页面
 */
export default class User extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleClick = () => {
    this.props.history.push('/user/details')
  }

  render() {
    return (
      <>
        <div>User Page</div>
        <UserForm />
        <button onClick={this.handleClick}>用户详情</button>
      </>
    )
  }
}
