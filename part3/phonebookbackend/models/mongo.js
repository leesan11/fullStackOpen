const mongoose = require('mongoose');

let url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true })
.then(result=>{
  console.log("connected to mongo")
})
.catch(error=>{
  console.log(error.message)
})

const personSchema = new mongoose.Schema({
  name: String,
  number: Number
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports= mongoose.model('Phone', personSchema)