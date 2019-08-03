import React, { useState } from 'react'

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

  const handleSearchInput = (event) => {
    setSearch(event.target.value)
  }

  const showNames = () => {
    return(
      persons.filter(person=> ((person.name).toLowerCase()).indexOf(newSearch) !== -1)
        .map(person=>(<p key={person.name}>{person.name} {person.number}</p>))
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          filter shown with <input onChange={handleSearchInput} />
        </div>
      <h2>Add a new</h2>
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