const mongoose = require('mongoose')


const commentsSchema = new mongoose.Schema({
    comments:[],
    blog_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'Blog'
        }
    
})

commentsSchema.set('toJSON', {
    transform: (document,returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    }
})

const Comment = mongoose.model('Comment',commentsSchema)

module.exports = Comment