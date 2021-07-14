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

  render() {
    return (
      <>
        <div>User Page</div>
        <UserForm />
      </>
    )
  }
}
