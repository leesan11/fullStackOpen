const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const phonebook = require('./db.json')
app.use(bodyParser.json());

app.get("/api/persons", (request, response) => {
    response.json(phonebook)
})

app.get("/info", (request, response) => {
    response.send(`Phonebook has info for ${phonebook.persons.length} people.<br>${new Date()}`)
})

app.listen(3001, () => {
    console.log("listening to 3001")
})