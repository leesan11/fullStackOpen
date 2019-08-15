import usersService from '../services/users'

export const getAllUsers = () =>{
    
    return async dispatch => {
        const response = await usersService.getUsers()
        dispatch({
            type: 'GETALL',
            users: response
        })
    }
}

export const getSpecificUser = (id) => {
    return async dispatch => {
        const response = await usersService.getUsers()
        const user = response.find(u=>u.id === id)
        console.log(user)
        dispatch({
            type: 'GETUSER',
            user: user
        })
    }
}

const usersReducer = (state={}, action) =>{
    switch(action.type){
        case 'GETALL':
            return action.users
        default:
            return state
    }

}

export default usersReducer