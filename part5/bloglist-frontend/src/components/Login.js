import React from 'react'
import {useState} from 'react'
import loginService from '../services/login'
import blogService from '../services/blogs'

const Login = ({cred}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        const response = await loginService.login({username, password})
        const token = response.token
        if(token){
            window.localStorage.setItem("loggedBlogUser", JSON.stringify(response))
            cred.setLoggedIn(true)
            cred.setAlert({message:"Logged In",error:false})
            blogService.setToken(token)
            cred.setUser(response)
            setTimeout(()=>{
                cred.setAlert({message:"",error:false})
            },3000)
        }
        }catch(error){
        
            cred.setAlert({message:"Incorrect Username or password",error:true})
            setTimeout(()=>{
                cred.setAlert({message:"",error:false})
            },3000)
        }
        
    }

    return (
        <form>
            <label>Username</label>
            <input type="text" onChange={(e) => setUsername(e.target.value)}/>
            <br />
            <label>Password</label>
            <input type="password" onChange={(e)=> setPassword(e.target.value)}/>
            <br />
            <button type="submit" onClick={handleSubmit}>login</button>
        </form>
    )
}

export default Login