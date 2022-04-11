import { createContext, useContext, useState } from "react";
import React from "react";
export const authContext = createContext()


export const AuthProvider = (props) => {

    const [username,setUsername] = useState('')
    const [isAuth,setIsAuth] = useState(false)

    const login = (user) => {
        setUsername(user)
        setIsAuth(true)
    }

    const logout = () => {
        setUsername('')
        setIsAuth(false)
    }
    return(
        <authContext.Provider value={{username,isAuth,login,logout}}>
            {props.children}
        </authContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(authContext)
}