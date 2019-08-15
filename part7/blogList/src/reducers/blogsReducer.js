import blogService from '../services/blogs'
export const initBlogs = () => {
    
    return async dispatch => {
        const allBlogs = await blogService.getAllBlogs()
        console.log(allBlogs)
        dispatch({
            type: 'INIT',
            blogs: allBlogs
        })
    }

}

export const addBlog = (obj) => {

    return async dispatch => {
        const newBlog = await blogService.addBlog(obj)
        dispatch({
            type:'ADDBLOG',
            newBlog: newBlog
        })
    }

}




const blogsReducer = (state=[], action) => {
    console.log(action)
    switch(action.type){
        case 'INIT':
            return action.blogs
        case 'ADDBLOG':
            return [...state, action.newBlog]
        default:
            return state
    }

}

export default blogsReducer