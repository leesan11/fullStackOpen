import usersService from '../services/users'

export const getSpecificUser = (id) => {
    return async dispatch => {
        const response = await usersService.getUsers()
        const user = response.find(u=>u.id === id)
        
        dispatch({
            type: 'GETUSER',
            user: user
        })
    }
}

const userReducer = (state={}, action) =>{
    switch(action.type){
        case 'GETUSER':
            return action.user
        default:
            return state
    }

}

export default userReducer