import { Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import  Events from './pages/Events';
import Teams from "./pages/Teams"
import Members from './pages/Members';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'events', element: <Events /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'teams', element: <Teams /> },
      { path: 'members', element: <Members /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
