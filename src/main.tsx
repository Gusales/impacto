import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './pages/home'
import { Login } from './pages/login'

import './lib/i18n'
import './index.css'

const routers = createBrowserRouter([
  {
    path: '',
    element: <Home />
  },
  {
    path: 'login',
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>,
)
