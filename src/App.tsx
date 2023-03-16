import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import useAuth from './hooks/useAuth';
import useFetchUserData from './hooks/useFetchUserData';
import About from './pages/About';
import Discovery from './pages/Discovery';
import Home from './pages/Home';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';

function App() {
  const currentUser = useAuth();
  useFetchUserData(currentUser);

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: 'home',
          element: <Home />,
        },
        {
          path: 'discovery',
          element: <Discovery />,
        },
        {
          path: 'notifications',
          element: <Notifications />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'profile',
          element: <Profile />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
