import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persone from './components/Persone'
import NumberService from './services/Numbers'
import Message from './components/Message'



const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNumber ] = useState('')
  const [ newSearch, setSearch ] = useState('')
  const [ newMessage, setMessage ] = useState('')
  

  useEffect( ()=>{
    async function getData(){
      let allNumbers = await NumberService.getAll()
        setPersons(allNumbers.persons)
    }
    console.log("effect")
    getData()
  },[newMessage])

  return (
    <div>
      {newMessage?<Message newMessage={newMessage} />:null}
      <h2>Phonebook</h2>
        <Filter setSearch={setSearch}/>
      <h2>Add a new</h2>
        <PersonForm persons={persons} newName={newName} newNumber={newNumber} setPersons={setPersons} 
          setNewName={setNewName} setNumber={setNumber} setMessage={setMessage}/>
      <h2>Numbers</h2>
        <Persone persons={persons} newSearch={newSearch} setPersons={setPersons} setMessage={setMessage}/>
    </div>
  )
}

export default App