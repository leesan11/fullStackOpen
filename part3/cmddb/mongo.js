const mongoose = require('mongoose');

if ( process.argv.length<3 ) {
    console.log('give password as argument')
    process.exit(1)
  }
  
  const password = process.argv[2]

  const name = process.argv[3]
  const number = process.argv[4]

let url = `mongodb+srv://leesan11:${password}@cluster0-imp84.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: Number
})

const Person = mongoose.model('Phone', personSchema)

if (name && number){
const person = new Phone({
  name,
  number
})

person.save().then(response => {
  console.log(`added ${response.name} ${response.number} to phonebook`)
  mongoose.connection.close()
})
}else{
  Person.find({}).then(result=>{
    console.log("Phonebook")
    result.forEach(obj => {
      console.log(`${obj.name} ${obj.number}`)
    })
    mongoose.connection.close()
  })
}