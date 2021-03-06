require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const Person = require('./models/mongo')
const app = express()
// const phonebook = require('./db.json');
// const fs = require('fs');
const morgan = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 3001
app.use(cors())
app.use(bodyParser.json());
app.use(express.static('build'))
morgan.token('post', function (req) { return JSON.stringify(req.body) })
app.use(morgan(function (tokens, req, res) {
    return [
    tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms',
        tokens.post(req, res)
    ].join(' ')
}))




app.get("/api/persons/:id", (request, response, next) => {
    // let result = (phonebook.persons).find(person => person.id == request.params.id)
    // if (result) {
    //     response.json(result)
    // } else {
    //     response.status(404).end()
    // }
    Person.findById(request.params.id)
        .then(result => {
            if (result) {
                response.json(result.toJSON())
            } else {
                response.status(404).end()
            }
        })
        .catch(error => next(error))

})

app.delete("/api/persons/:id", (request, response, next) => {
    // let db = JSON.parse(fs.readFileSync(`${__dirname}/db.json`).toString());
    // let result = (phonebook.persons).filter(person => person.id != request.params.id)
    // phonebook.persons = result
    // response.status(204).json({ "data": "deleted" })
    // fs.writeFile(`${__dirname}/db.json`, JSON.stringify({persons:result}),()=>{
    //     response.status(204).json({"data":"deleted"})
    // });
    Person.findById(request.params.id)
        .then(result => {
            if (!result) {
                response.status(404).end()
            }
        })

    Person.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
})

app.put("/api/persons/:id", (request, response) => {
    Person.findByIdAndUpdate(request.params.id, request.body, { new: true })
        .then(result => {
            response.json(result.toJSON())
        })
        .catch(error => next(error))
})

app.post("/api/persons", (request, response, next) => {
    let toAddObj = request.body
    // let db = JSON.parse(fs.readFileSync(`${__dirname}/db.json`).toString());

    if (!toAddObj.name || !toAddObj.number) {
        response.status(404).json({ "error": "must supply name and number" })
        // } else if (((phonebook.persons).find(person => person.name == toAddObj.name))) {
        //     response.status(404).json({ "error": "name must be unique" })
    } else {

        const newPerson = new Person(toAddObj)
        newPerson.save().then(result => {
            response.json(result.toJSON())
        })
        .catch(error=>{
            next(error)
        })
        // fs.writeFile(`${__dirname}/db.json`, JSON.stringify({persons:result}),()=>{
        //     response.json(newPerson)
        // });
    }
})

app.get("/api/persons", (request, response) => {
    Person.find({}).then(result => {
        response.json({ persons: result.map(num => num.toJSON()) })
    })
})

app.get("/info", (request, response) => {
    Person.find({})
        .then(result => {
            response.send(`Phonebook has info for ${result.length} people.<br>${new Date()}`)
        })
        .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

// handler of requests with unknown endpoint
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.error(error.message)
    console.log("er")
    if (error.name === 'CastError' && error.kind == 'ObjectId') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }

    next(error)
}
app.use(errorHandler)


app.listen(PORT, () => {
    console.log("listening to 3001")
})