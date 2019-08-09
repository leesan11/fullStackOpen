import React from 'react'
import  { useField } from '../hooks/index'
import loginService from '../services/login'
import blogService from '../services/blogs'

const Login = ({ cred }) => {
  const username = useField('text')
  const password = useField('password')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await loginService.login({ username: username.fields.value, password: password.fields.value })
      const token = response.token
      if (token) {
        window.localStorage.setItem('loggedBlogUser', JSON.stringify(response))
        cred.setLoggedIn(true)
        cred.setAlert({ message: 'Logged In', error: false })
        cred.setUser(response)
        blogService.setToken(token)
        username.reset()
        password.reset()
        setTimeout(() => {
          cred.setAlert({ message: '', error: false })
        }, 3000)
      }
    } catch (error) {

      cred.setAlert({ message: 'Incorrect Username or password', error: true })
      setTimeout(() => {
        cred.setAlert({ message: '', error: false })
      }, 3000)
    }

  }

  return (
    <form className='login-form'>
      <label>Username</label>
      <input type="text" {...username.fields} />
      <br />
      <label>Password</label>
      <input type="password" autoComplete="true" {...password.fields} />
      <br />
      <button type="submit" onClick={handleSubmit}>login</button>
    </form>
  )
}

export default Login