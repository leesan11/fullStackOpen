const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
mongoose.set('findByIdAndRemove', false)
mongoose.set('useFindAndModify', false)

let url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true })
.then(result=>{
  console.log("connected to mongo")
})
.catch(error=>{
  console.log(error.message)
})

const personSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength:3, unique: true },
  number: { type: String, required: true, minlength:8, unique: true }
})
personSchema.plugin(uniqueValidator);

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports= mongoose.model('Phone', personSchema)