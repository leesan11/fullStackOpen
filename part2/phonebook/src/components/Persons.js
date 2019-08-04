import React from 'react'
import NumberService from '../services/Numbers'

const Persons = ({persons, newSearch, setPersons}) => {
  const handleDelete = (event) => {
    let confirmDelete = window.confirm(event.target.dataset.name)
    let id = event.target.dataset.id
    if(confirmDelete){
      NumberService.delNumber(id).then(response=>{
        setPersons(persons.filter(person=>person.id !== id))
      })
    }
  }
    return (
          persons.filter(person=> ((person.name).toLowerCase()).indexOf(newSearch) !== -1)
            .map(person=>(<div key={person.name}><span>name: {person.name} number: {person.number}</span><button data-name={person.name} data-id={person.id} onClick={(event)=>handleDelete(event)}>delete</button></div>))
        )}

export default Persons