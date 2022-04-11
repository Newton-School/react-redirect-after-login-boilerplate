import React,{ useState } from "react"
import { useNavigate } from "react-router"
import { useAuth } from "./Auth"

export const Login = () => {
    const auth = useAuth()
    const [name,setName] = useState('')
    const nav = useNavigate()


    const onClick = () =>{
        auth.login(name)
        nav('/');
    }
    return (
        <div id="login-page">
            <label>
                Username
                <input id="username-input" placeholder="username" value={name} onChange={(e)=>setName(e.target.value)}/>
            </label>
           
            <button onClick={onClick}>
                Login
            </button>
        </div>
    )
}