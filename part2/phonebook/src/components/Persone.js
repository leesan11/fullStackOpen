import React from 'react'
import NumberService from '../services/Numbers'

const Persone = ({persons, newSearch, setPersons, setMessage}) => {
  const handleDelete = (event) => {
    let confirmDelete = window.confirm(event.target.dataset.name)
    let id = event.target.dataset.id
    if(confirmDelete){
      NumberService.delNumber(id).then(response=>{
        setPersons(persons.filter(person=>person.id !== id))
        setMessage(`Deleted`)
            setTimeout(()=>setMessage(''),2000)
      })
    }
  }

  const rendPersons = () => {
    let result = persons.filter(person=> (((person.name).toLowerCase()).indexOf(newSearch) !== -1))
    let res = result.map(person=>(<div key={person.name}><span>name: {person.name} number: {person.number}</span><button data-name={person.name} data-id={person.id} onClick={(event)=>handleDelete(event)}>delete</button></div>))
    return res
    
  }

    return rendPersons()
        
      }

export default Persone