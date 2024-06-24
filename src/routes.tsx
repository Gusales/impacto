import { Home } from './pages/Home/home'
import { Login } from './pages/Login/login'
import { Register } from './pages/Register/register'
import { ShoppingPage } from './pages/Shopping/shopping'
import { Doar } from './pages/Doar/doar'

import { createBrowserRouter } from 'react-router-dom'
import { Sobre } from './pages/Sobre/sobre'
import { Doacoes } from './pages/Doacoes/doacoes'

export const routers = createBrowserRouter([
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
  },
  {
    path: 'doar',
    element: <Doar />
  },
  {
    path: 'sobrenos',
    element: <Sobre />
  },
  {
    path: 'doacoes',
    element: <Doacoes />
  }
])