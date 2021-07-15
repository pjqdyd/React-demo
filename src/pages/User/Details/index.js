import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

/**
 * 用户详情页
 */

@connect((state) => ({ userState: state.user }), (dispatch) => ({ userDispatch: dispatch.user }))
class UserDetails extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleAdd = () => {
    // const { addCount } = this.props
    // addCount(1)
    const { userDispatch } = this.props
    userDispatch.addCount(1)
  }

  handleUserInfo = () => {
    // const { getUserInfo } = this.props
    // getUserInfo({ id: 1001 })
    const { userDispatch } = this.props
    userDispatch.fetchUserInfoAsync({ id: 1001 })
  }

  render() {
    // const { count, userInfo } = this.props
    const { userState } = this.props
    const { userInfo } = userState
    return (
      <>
        <div>User Details</div>
        <button onClick={this.handleAdd}> + </button>
        {/*<div>用户store: count: {count} </div>*/}
        <div>用户store: count: {userState.count} </div>
        <button onClick={this.handleUserInfo}> 异步获取用户信息 </button>
        <div>用户store: userInfo.username: {userInfo.username} </div>
        <div>用户store: userInfo.age: {userInfo.age} </div>
      </>
    )
  }
}
// const mapStateToProps = (state) => ({
//   count: state.user.count,
//   userInfo: state.user.userInfo
// })
//
// const mapDispatchToProps = (dispatch) => ({
//   addCount: dispatch.user.addCount,
//   getUserInfo: dispatch.user.fetchUserInfoAsync
// })
// export default connect(mapStateToProps, mapDispatchToProps)(UserDetails)
export default UserDetails
