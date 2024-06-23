import { Home } from './pages/Home/home'
import { Login } from './pages/Login/login'
import { Register } from './pages/Register/register'
import { ShoppingPage } from './pages/Shopping/shopping'
import { Doacao } from './pages/Doacao/doacao'

import { createBrowserRouter } from 'react-router-dom'

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
    path: 'doacao',
    element: <Doacao />
  }
])