const Blog = require('../models/blogs')
const User = require('../models/users')

const initialBlogs = [
    {
        title:"new blog",
        author:"John Smith",
        url:"www.google.ca",
        likes:5
    },
    {
        title:"another new blog",
        author:"John Smith",
        url:"www.google.ca",
        likes:3
    }
]

const blogsInDb = async () => {
    const blogs = await Blog.find({})
    const result = await Promise.all(blogs.map(async blog=>await blog.toJSON()))
    return result
}

const usersInDb = async () => {
    const users = await User.find({})
    return await Promise.all(users.map(async user=>await user.toJSON()))
}

module.exports = {initialBlogs, blogsInDb, usersInDb}