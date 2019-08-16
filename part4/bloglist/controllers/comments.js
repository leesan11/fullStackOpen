const commentsRouter = require('express').Router()
const Comment = require('../models/comments')
const jwt = require('jsonwebtoken')

commentsRouter.get("/", async (request, response) => {

    const comments = await Comment.find({}).populate('blogs')
    response.json(comments.map(ele => ele.toJSON()))

})


commentsRouter.post("/:id", async (request, response, next) => {
    let temp = request.body
    
    // const token = request.token
    try {
        // const decodedToken = jwt.verify(token, process.env.SECRET)
        // if(!token || !decodedToken.id){
        //     return response.status(401).json({error:"token missing or invalid"})
        // }
        const comment = await Comment.find({blog_id: request.params.id})
        console.log(comment)
        if(comment.length>0){
            comment[0].comments.push(temp.comment)
            const putComment = await Comment.findOneAndUpdate({blog_id: request.params.id},{comments: comment[0].comments},{new:true})
            response.json(putComment.toJSON())
        }else{
            const newComment = new Comment({blog_id: request.params.id, comments: [temp.comment] })
            const savedComment = await newComment.save()
            response.json(savedComment.toJSON())
        }
        
    } catch (exception) {
        next(exception)
    }

})

commentsRouter.get("/:id", async (request, response, next) => {
    // const token = request.token
    try {
        // const decodedToken = jwt.verify(token, process.env.SECRET)
        // if(!token || !decodedToken.id){
        //     return response.status(401).json({error:"token missing or invalid"})
        // }
        const comment = await Comment.find({blog_id: request.params.id})
        if (comment[0]) {
            response.json(comment[0].toJSON())
        } else {
            response.status(404).end()
        }
    }
    catch (exception) {
        next(exception)
    }


})

module.exports = commentsRouter