import React from "react";
import { useAuth } from "./Auth"
import { Navigate } from "react-router";


export const ProtectedRoute = ({ children, ...rest }) => {
    const auth = useAuth()

    if (!auth.isAuth) return <Navigate
        to='/login'
       replace 
    />
    return children
}