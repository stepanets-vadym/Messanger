import React, { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publickRoutes } from './Routes';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from 'index';

function AppRoter() {
  const { auth } = useContext(Context);
  // const [user] = useAuthState(auth);
  const user = true
  // console.log(user);
  return user ? (
    <Routes>
      {/* authorization Pages  */}
      {
        privateRoutes.map(({ path, Component }) => (
          <Route key={`Path name : ${path}`} path={path} element={Component} />
          
        ))}
        <Route path='*' element={<Navigate replace to='/messanger' />} />

    </Routes>
  ) : (
    <Routes>
      {/* Public Pages */}
      {publickRoutes.map(({ path, Component }) => (
        <Route key={`Path name : ${path}`} path={path} element={Component} />
      ))}
      <Route path='*' element={<Navigate replace to='/login' />} />
    </Routes>
  );
}

export default AppRoter;
