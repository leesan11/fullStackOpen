const blogsRouter = require('express').Router()
const Blog = require('../models/blogs')
const User = require('../models/users')
const jwt = require('jsonwebtoken')

blogsRouter.get("/", async (request, response) => {

    const blog = await Blog.find({}).populate('users')
    response.json(blog.map(ele => ele.toJSON()))

})

blogsRouter.put("/:id", async (request, response, next) => {
    const token = request.token
    try{
        const decodedToken = jwt.verify(token, process.env.SECRET)
        if(!token || !decodedToken.id){
            return response.status(401).json({error:"token missing or invalid"})
        }
        const putBlog = await Blog.findByIdAndUpdate(request.params.id,request.body,{new:true})
        response.json(putBlog.toJSON())
    }catch(exception){
        next(exception)
    }
})

blogsRouter.delete("/:id", async (request, response, next) => {
    // get user first
    const token = request.token
    const decodedToken = jwt.verify(token, process.env.SECRET)
        if(!token || !decodedToken.id){
            return response.status(401).json({error:"token missing or invalid"})
        }
        const user = await User.findById(decodedToken.id)
    try{
        const delBlog = await Blog.findById(request.params.id)
        if (delBlog.user.toString() === user._id.toString()){
            await Blog.findByIdAndDelete(request.params.id)
            response.status(204).end()
        }else{
            return response.status(401).json({error:"no permission"})
        }
        
    }catch(exception){
        next(exception)
    }
})

blogsRouter.post("/", async (request, response, next) => {
    let temp = request.body
    
    if (!temp.likes) {
        temp = { ...temp, likes: 0 }
    }
    const token = request.token
    try {
        const decodedToken = jwt.verify(token, process.env.SECRET)
        if(!token || !decodedToken.id){
            return response.status(401).json({error:"token missing or invalid"})
        }
        const user = await User.findById(decodedToken.id)
        temp = {...temp, user}

        const newBlog = new Blog(temp)
        const savedBlog = await newBlog.save()
        user.blogs = user.blogs.concat(savedBlog._id)
        await user.save()
        response.json(savedBlog.toJSON())
    } catch (exception) {
        next(exception)
    }

})

blogsRouter.get("/:id", async (request, response, next) => {
    const token = request.token
    try {
        const decodedToken = jwt.verify(token, process.env.SECRET)
        if(!token || !decodedToken.id){
            return response.status(401).json({error:"token missing or invalid"})
        }
        const newBlog = await Blog.findById(request.params.id)
        if (newBlog) {
            response.json(newBlog.toJSON())
        } else {
            response.status(404).end()
        }
    }
    catch (exception) {
        next(exception)
    }


})

module.exports = blogsRouter