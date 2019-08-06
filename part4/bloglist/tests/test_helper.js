const Blog = require('../models/blogs')

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

module.exports = {initialBlogs, blogsInDb}