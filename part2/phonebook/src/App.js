import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import NumberService from './services/Numbers'



const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNumber ] = useState('')
  const [ newSearch, setSearch ] = useState('')

  useEffect( ()=>{
    NumberService.getAll().then((allNumbers)=>{
      setPersons(allNumbers)
    })
  },[])

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter setSearch={setSearch}/>
      <h2>Add a new</h2>
        <PersonForm persons={persons} newName={newName} newNumber={newNumber} setPersons={setPersons} 
          setNewName={setNewName} setNumber={setNumber}/>
      <h2>Numbers</h2>
        <Persons persons={persons} newSearch={newSearch}/>
    </div>
  )
}

export default App