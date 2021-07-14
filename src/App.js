// import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import router from './router'
import React from 'react'

function App() {
  return (
    <div>
      <BrowserRouter>{renderRoutes(router)}</BrowserRouter>
    </div>
  )
}

export default App
