import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './pages/Home/home'
import { Login } from './pages/Login/login'
import { Register } from './pages/Register/register'

import './lib/i18n'
import './index.css'
import { ShoppingPage } from './pages/Shopping/shopping'

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
