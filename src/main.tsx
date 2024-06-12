import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './pages/home'
import { Login } from './pages/login'
import { Register } from './pages/register'

import './lib/i18n'
import './index.css'
import { ShoppingPage } from './pages/shopping'

const routers = createBrowserRouter([
  {
    path: '',
    element: <Home />
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'register',
    element: <Register />
  },
  {
    path: 'shopping',
    element: <ShoppingPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>,
)
