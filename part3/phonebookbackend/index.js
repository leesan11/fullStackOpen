const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const phonebook = require('./db.json');
const fs = require('fs');
const morgan = require('morgan');
const cors = require('cors')
const PORT = process.env.PORT || 3001
app.use(cors())
app.use(bodyParser.json());
app.use(express.static('build'))
morgan.token('post', function (req, res) { return JSON.stringify(req.body) })
app.use(morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms',
      tokens.post(req,res)
    ].join(' ')
  }))

let phonebook = {
    "persons": [
        {
            "name": "Arto Hellas",
            "number": "040-123456",
            "id": 1
        },
        {
            "id": 2,
            "name": "Ada Lovelace",
            "number": "123"
        },
        {
            "name": "Dan Abramov",
            "number": "12-43-234345",
            "id": 3
        },
        {
            "name": "Mary Poppendieck",
            "number": "39-23-6423122",
            "id": 4
        },
        {
            "name": "asd",
            "number": "123",
            "id": 894
        },
        {
            "name": "qwe",
            "number": "123",
            "id": 114
        }
    ]
};
app.get("/api/persons/:id", (request, response) => {
    let result = (phonebook.persons).find(person=>person.id == request.params.id)
    if(result){
        response.json(result)
    }else{
        response.status(404).end()
    }  
})

app.delete("/api/persons/:id", (request, response)=>{
    // let db = JSON.parse(fs.readFileSync(`${__dirname}/db.json`).toString());
    let result = (phonebook.persons).filter(person => person.id != request.params.id)
    phonebook.persons = result
    response.status(204).json({"data":"deleted"})
    // fs.writeFile(`${__dirname}/db.json`, JSON.stringify({persons:result}),()=>{
    //     response.status(204).json({"data":"deleted"})
    // });  
})

app.post("/api/persons", (request,response) => {
    let toAddObj = request.body
    // let db = JSON.parse(fs.readFileSync(`${__dirname}/db.json`).toString());
    
    if (!toAddObj.name || !toAddObj.number){
        response.status(404).json({"error":"must supply name and number"})
    }else if( ((phonebook.persons).find(person=>person.name == toAddObj.name)) ){
        response.status(404).json({"error":"name must be unique"})
    }else{
        let id = Math.floor((Math.random()*1000) + 4)
        let newPerson = {...(toAddObj), 
                    id:id}
        let result = [...phonebook.persons, newPerson]   
        phonebook.persons = result
        response.json(newPerson)
        // fs.writeFile(`${__dirname}/db.json`, JSON.stringify({persons:result}),()=>{
        //     response.json(newPerson)
        // });
    }
})

app.get("/api/persons", (request, response) =>{
    response.json(phonebook)
})

app.get("/info", (request, response) => {
    response.send(`Phonebook has info for ${phonebook.persons.length} people.<br>${new Date()}`)
})



app.listen(PORT, () => {
    console.log("listening to 3001")
})