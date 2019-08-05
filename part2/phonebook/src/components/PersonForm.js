import React from 'react';
import NumberService from '../services/Numbers'

const PersonForm = ({persons, newName, newNumber, setPersons, setNewName, setNumber, setMessage}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        if(persons.map(person=>person.name).indexOf(newName) === -1){
          
          NumberService.addNumber({name:newName,number:newNumber}).then(response=>{
            setPersons([...persons,response])
            setMessage(`Added ${newName}`)
            setTimeout(()=>setMessage(''),2000)
          })
          .catch(error=>{
            
            setMessage(`${error.response.data.error}`)
            setTimeout(()=>setMessage(''),2000)
          })
        }else{
          let putConfirm = window.confirm(`${newName} is already added to the phonebook, replace the old number with new one?`)
          if (putConfirm){
            let id = '';
            persons.forEach(person => {id = person.name === newName ? person.id:id});
            
            NumberService.putNumber(id, {id:id, name:newName, number:newNumber})
            .then(response=>{
              setPersons([...persons.filter(person=>person.id!==id), {...response,name:newName,number:newNumber}])
              setMessage(`Changed number of ${newName}`)
              setTimeout(()=>setMessage(''),5000)
            })
            .catch(error=>{
              setMessage(`Information of ${newName} has already been removed from the server`)
              setTimeout(()=>setMessage(''),5000)
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