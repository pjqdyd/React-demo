// import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import renderRoutes from '@/router/renderRoutes'
import routes from '@/router/routes'
import React from 'react'

function App() {
  return (
    <div>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </div>
  )
}

export default App
