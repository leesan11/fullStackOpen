import React from 'react'
import { connect } from 'react-redux'
import { login, logout } from '../reducers/loginReducer'
import { Button, Input } from 'semantic-ui-react'

const Login = (props) => {
    
    const handleSubmit = (event) => {
        event.preventDefault()
        props.login({
            username: event.target.username.value,
            password: event.target.password.value
        })
    }

    const handleLogout = () => {
        localStorage.removeItem('user')
        props.logout()
    }

    const getLoginForm = () => 
        Object.keys(props.user).length===0 ? (
            <form onSubmit={handleSubmit}>
            <label>Username: </label>
            <Input id='username' name='username' />
            <label>Password: </label>
            <Input id='password' name='password'/>
            <Button primary>Login</Button>
            </form>
        )
        :<span>{props.user.username} is logged in<Button secondary onClick={handleLogout}>Logout</Button></span>
    
    return getLoginForm()

}

const mapStateToProps = (state) => (
    {
        user: state.login
    }
    )

const connectedLogin = connect(mapStateToProps,{login, logout})(Login)

export default connectedLogin