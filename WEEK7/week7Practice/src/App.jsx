import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './app/Dashboard';
import Overview from './pages/Overview';
import Companies from './pages/Companies';
import Deals from './pages/Deals';
import Contacts from './pages/Contacts';
import Calender from './pages/Calender';
import Messages from './pages/Messages';
import Documents from './pages/Documents';
import Profile from './pages/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        path: '/overview',
        element: <Overview />

      },
      {
        path: '/companies',
        element: <Companies />

      },
      {
        path: '/deals',
        element: <Deals />

      },
      {
        path: '/contacts',
        element: <Contacts />

      },
      {
        path: '/calender',
        element: <Calender />

      },
      {
        path: '/messages',
        element: <Messages />

      },
      {
        path: '/documents',
        element: <Documents />

      },
      {
        path: '/profile',
        element: <Profile />

      },

    ]
  }
])

function App() {

  return (
    <div className='bg-stone-400 min-h-screen '>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;