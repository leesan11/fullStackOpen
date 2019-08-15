import userService from '../services/users'

export const login = (obj) => {

    return async dispatch => {
        let response = obj
        if(!obj.token){
            response = await userService.login(obj)
            localStorage.setItem('user', JSON.stringify(response))
        }
        dispatch({
            type:'LOGIN',
            ...response
        })
    }
}

export const logout = () => {
    return dispatch => {
        dispatch({
            type:'LOGOUT'
        })
    }
}


const initState = localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):{}

const loginReducer = (state=initState, action) => {
    console.log(state)
    switch(action.type){
        case 'LOGIN':
            return {
                token: action.token,
                username: action.username,
                name: action.name,
                uid: action.uid
            }
        case 'LOGOUT':
            return {}
        default:
            return state
        
    }
    
}

export default loginReducer