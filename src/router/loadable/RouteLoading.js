import React from 'react'

/**
 * 路由加载中状态
 * @param props
 * @returns {JSX.Element|null}
 * @constructor
 */
const RouteLoading = (props) => {
  if (props.error) {
    console.error('LoadingError:', props.error)
    return <div>Error Page</div>
  } else if (props.timedOut) {
    console.error('TimedOut')
    return <div>TimeOut Page</div>
  } else if (props.pastDelay) {
    return <div>加载中...</div>
  } else {
    return null
  }
}

export default RouteLoading
