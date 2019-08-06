const blogsRouter = require('express').Router()
const Blog = require('../models/blogs')

blogsRouter.get("/",async (request, response) => {

    const blog = await Blog.find({})
    response.json(blog.map(ele=>ele.toJSON()))

})

blogsRouter.post("/", async (request, response, next) => {
    let temp = request.body
    if(!temp.likes){
        temp = {...temp, likes:0}
    }
    try{
        const newBlog = new Blog(temp)
        const savedBlog = await newBlog.save()
        response.json(savedBlog.toJSON())
    }catch(exception){
        next(exception)
    }

})

blogsRouter.get("/:id", async (request, response, next) => {

    try{
        const newBlog = await Blog.findById(request.params.id)
        if(newBlog){
            response.json(newBlog.toJSON())
        }else{
            response.status(404).end()
        }
    }
    catch(exception){
        next(exception)
    }
    
    
})

module.exports = blogsRouter