import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Cadastro, Home, Login } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Cadastro />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '*',
    element: <Navigate to={'/'}></Navigate>,
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
