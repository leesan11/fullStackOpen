import React from 'react'
import loginService from '../services/login'

const Login = ({cred}) => {

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        const response = await loginService.login({username:cred.username, password:cred.password})
        const token = response.token
        if(token){
            window.localStorage.setItem("token", response.token)
            cred.setLoggedIn(true)
            cred.setAlert("Logged In")
            setTimeout(()=>{
                cred.setAlert("")
            },3000)
        }
        }catch(error){
        
            cred.setAlert("Incorrect Username or password")
            setTimeout(()=>{
                cred.setAlert("")
            },3000)
        }
        
    }

    return (
        <form>
            <input type="text" onChange={(e) => cred.setUsername(e.target.value)}/>
            <input type="password" onChange={(e)=> cred.setPassword(e.target.value)}/>
            <button type="submit" onClick={handleSubmit}>login</button>
        </form>
    )
}

export default Login