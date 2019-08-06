const blogsRouter = require('express').Router()
const Blog = require('../models/blogs')

blogsRouter.get("/", (request, response) => {
    Blog.find({}).then((result) => result.map(ele => ele.toJSON()))
        .then(blogs => {
            response.json(blogs)
        })
})

blogsRouter.post("/", (request, response, next) => {
    const newBlog = new Blog(request.body)
    newBlog.save().then(result => result.toJSON())
        .then(blog => {
            response.json(blog)
        })
        .catch(error => next(error))
})

blogsRouter.get("/:id", (request, response, next) => {
    Blog.findById(request.params.id).then(result=>result.toJSON())
    .then(blog=>{
        response.json(blog)
    })
    .catch(error=>next(error))
})

module.exports = blogsRouter