import React, { PureComponent } from 'react'
import UserForm from './components/Form'
import $ from '@/utils/request'

/**
 * 用户页面
 */
export default class User extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      mockUserInfo: '',
    }
  }

  async componentDidMount() {
    const res = await $.get('/mock/userinfo', { id: 1000001 })
    console.log('请求Mock用户信息:', res)
    this.setState({ mockUserInfo: JSON.stringify(res) })
  }

  handleClick = () => {
    this.props.history.push('/user/details')
  }

  render() {
    const { mockUserInfo } = this.state
    return (
      <>
        <div>User Page</div>
        <UserForm />
        <div>Mock用户信息: {mockUserInfo}</div>
        <button onClick={this.handleClick}>用户详情</button>
      </>
    )
  }
}
