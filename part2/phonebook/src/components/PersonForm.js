import React from 'react';
import NumberService from '../services/Numbers'

const PersonForm = ({persons, newName, newNumber, setPersons, setNewName, setNumber}) => {

    const handleSubmit = (event) => {
        event.preventDefault();

        if(persons.map(person=>person.name).indexOf(newName) === -1){
          
          NumberService.addNumber({name:newName,number:newNumber}).then(response=>{
            console.log(response)
            setPersons([...persons,response])
          })
        }else{
          alert(`${newName} is already added to the phonebook`)
        }    
      }
    
    return (<form onSubmit ={handleSubmit}>
        <div>
          name: <input onChange={(event)=>setNewName(event.target.value)} />
        </div>
        <div>
          number: <input onChange={(event)=>setNumber(event.target.value)} />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>)
}

export default PersonForm