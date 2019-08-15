import blogService from '../services/blogs'
import commentService from '../services/comments'

export const getSpecificBlog = (obj) => {
    return async dispatch =>{
        const response = await blogService.getSpecificBlog(obj)
        dispatch({
            type: 'GETBLOG',
            specificBlog: response
        })
    }

}

export const changeLikes = (obj) => {
    return async dispatch => {
        const response = await blogService.changeLikes(obj)
        console.log(response)
        dispatch({
            type: 'LIKE',
            likes: response.likes
        })
    }
}

export const getSpecificComments = (obj) => {
    return async dispatch => {
        const response = await commentService.getSpecificComments(obj)
        console.log(response)
        dispatch({
            type:'GETCOMMENTS',
            comments: response.comments
        })
    }
}

export const addComment = (obj) => {
    return async dispatch => {
        const response = await commentService.addComment(obj)
        console.log(response)
        dispatch({
            type:'ADDCOMMENT',
            comments: response.comments
        })
    }
}

export const resetComments = () => {
    return dispatch=>{
        dispatch({
            type:'RESETCOMMENTS'  
        })
    }
}


const blogReducer = (state={}, action) =>{

    switch(action.type){
        case 'GETBLOG':
            return {...state, specificBlog: action.specificBlog}
        case 'LIKE':
            return {...state, likes: action.likes}
        case 'GETCOMMENTS':
            return {...state, comments: action.comments}
        case 'RESETCOMMENTS':
            return {...state, comments: []}
        case 'ADDCOMMENT':
            return {...state, comments: action.comments}
        default:
            return state
    }

}

export default blogReducer