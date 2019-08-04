const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const phonebook = require('./db.json')
app.use(bodyParser.json());

app.get("/api/persons", (request, response) => {
    response.json(phonebook)
})

app.listen(3001,()=>{
    console.log("listening to 3001")
})