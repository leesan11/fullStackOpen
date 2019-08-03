import React from 'react'
import Part from './components/Part'

const Content = ({parts}) =>parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}/>)

export default Content