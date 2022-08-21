import Login from 'Pages/Login/Login'
import Messanger from 'Pages/Messanger'
import React from 'react'
import { LOGIN_ROUTE, MESSANGER_ROUTE } from 'utils/consts'

export const publickRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: <Login/>
  }
]

export const privateRoutes = [
  {
    path: MESSANGER_ROUTE,
    Component: <Messanger/>
  }
]