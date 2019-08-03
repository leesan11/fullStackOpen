import React from 'react';

const PersonForm = ({persons, newName, newNumber, setPersons, setNewName, setNumber}) => {

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