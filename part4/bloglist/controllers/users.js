const usersRouter = require('express').Router()
const User = require('../models/users')
const bcrypt = require('bcrypt')

usersRouter.post("/", async (request,response,next)=>{
    // passsword is too short
    if(request.body.password.length <=3){
        response.status(400).json("password is too short")
    }
    try{
        const body = request.body
        const saltRounds = 10
        const passwordHash = await bcrypt.hash(body.password,saltRounds)

        const user = new User({
            username:body.username,
            name:body.name,
            passwordHash
        })
        const savedUser = await user.save()
        response.json(savedUser)
    }catch(exception){
        next(exception)
    }
})

usersRouter.get("/", async (request, response, next)=>{
    const users = await User.find({}).populate('blogs')
    response.json(users.map(user=>user.toJSON()))
})

module.exports = usersRouter