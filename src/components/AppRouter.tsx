import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/account/Dashboard';
import Home from '../pages/Home';
import Todo from '../pages/Todo';
import Chat from '../pages/Chat';
import PrivateRoute from './PrivateRoute';

const AppRouter:FC = () => {
  const auth = true;

  return (
    <Routes>
      <Route
        path='/'
        element={<Home/>}
      />
      <Route
        path='/todo'
        element={<Todo/>}
      />
      <Route
        path="/account"
        element={<PrivateRoute component={Dashboard} path='/todo'/>}
      />
      <Route
        path="/chat"
        element={<Chat/>}
      />
    </Routes>
  );
};

export default AppRouter;