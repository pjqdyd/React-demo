import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import renderRoutes from '@/router/renderRoutes'
import routes from '@/router/routes'
import store from '@/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </Provider>
  )
}

export default App
