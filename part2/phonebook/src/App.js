import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(persons.map(person=>person.name).indexOf(newName) === -1){
      setPersons([...persons,{
        name:newName
      }])
    }else{
      alert(`${newName} is already added to the phonebook`)
    }    
  }

  const handleInput = (event) => {
    setNewName(event.target.value)
  }

  const showNames = () => {
    let result = persons.map(person=>{
      return <p key={person.name}>{person.name}</p>
    })
    return result
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit ={handleSubmit}>
        <div>
          name: <input onChange={handleInput} />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {showNames()}
    </div>
  )
}

export default App