import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const {
    authDetails: { isAuth },
  } = useSelector((store) => store)
    if (!isAuth) {
        return <Navigate to='/login'/>
  }

  return children
}

export default PrivateRoute
