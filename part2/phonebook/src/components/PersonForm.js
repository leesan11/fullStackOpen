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
          let putConfirm = window.confirm(`${newName} is already added to the phonebook, replace the old number with new one?`)
          if (putConfirm){
            let id = '';
            persons.forEach(person => {id = person.name == newName ? person.id:id});
            console.log(id, newName, newNumber)
            NumberService.putNumber(id, {id:id, name:newName, number:newNumber}).then(response=>{
              console.log(response)
              setPersons([...persons.filter(person=>person.id!==id), {...response,name:newName,number:newNumber}])
            })
          }
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