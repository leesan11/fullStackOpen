const config = require('./utils/config')
const express = require('express')
const blogsRouter = require('./controllers/blogs')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const {requestLogger, unknownEndpoint, errorHandler} = require('./utils/middleware')
const app = express()
app.use(bodyParser.json())
app.use(cors())
mongoose.connect(config.MONGODB_URI,{ useNewUrlParser: true })
.then(()=>{
    console.log("connected to mongo")
})
.catch((error)=>{
    console.log(`mongo error ${error.message}`)
})

app.use(requestLogger)
app.use('/api/blogs', blogsRouter)
app.use(unknownEndpoint)
app.use(errorHandler)

module.exports = app