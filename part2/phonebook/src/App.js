import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '123-2231-23' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNumber ] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(persons.map(person=>person.name).indexOf(newName) === -1){
      setPersons([...persons,{
        name:newName,
        number:newNumber
      }])
    }else{
      alert(`${newName} is already added to the phonebook`)
    }    
  }

  const handleNameInput = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberInput = (event) => {
    setNumber(event.target.value)
  }

  const showNames = () => {
    let result = persons.map(person=>{
      return <p key={person.name}>{person.name} {person.number}</p>
    })
    return result
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit ={handleSubmit}>
        <div>
          name: <input onChange={handleNameInput} />
        </div>
        <div>
          number: <input onChange={handleNumberInput} />
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