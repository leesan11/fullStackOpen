import React from 'react'

const Persons = ({persons, newSearch}) => {
    return (
          persons.filter(person=> ((person.name).toLowerCase()).indexOf(newSearch) !== -1)
            .map(person=>(<p key={person.name}>{person.name} {person.number}</p>))
        )}

export default Persons