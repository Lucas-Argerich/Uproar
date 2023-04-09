import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import ManageAuth from './components/ManageAuth'
import useHandleUserState from './hooks/useHandleUserState'
import About from './pages/About'
import Discovery from './pages/Discovery'
import Home from './pages/Home'
import Login from './pages/Login'
import Notifications from './pages/Notifications'
import Profile from './pages/Profile'
import Register from './pages/Register'

function App () {
  useHandleUserState()

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: 'home',
          element: <Home />
        },
        {
          path: 'discovery',
          element: <Discovery />
        },
        {
          path: 'notifications',
          element: <Notifications />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'profile',
          element: <Profile />
        },
        {
          element: <ManageAuth />,
          children: [
            {
              path: 'login',
              element: <Login />
            },
            {
              path: 'register',
              element: <Register />
            }
          ]
        }
      ]
    }
  ])

  return <RouterProvider router={routes} />
}

export default App
