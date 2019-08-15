import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import loginReducer from './reducers/loginReducer'
import blogsReducer from './reducers/blogsReducer'
import usersReducer from './reducers/usersReducer'
import userReducer from './reducers/userReducer'
import blogReducer from './reducers/blogReducer'

const reducers = combineReducers({
    login: loginReducer,
    blogs: blogsReducer,
    users: usersReducer,
    user: userReducer,
    blog: blogReducer
    })

const store = createStore(reducers, applyMiddleware(thunk))

export default store