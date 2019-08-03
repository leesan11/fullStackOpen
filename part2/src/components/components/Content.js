import React from 'react'
import Part from './components/Part'
import Total from './components/Total'

const Content = ({parts}) =>{
    const getParts = () => {
        let total = 0
        let result = parts.map(part => {
            total += part.exercises
            return <Part key={part.id} name={part.name} exercises={part.exercises}/>
            })
        result.push(<Total key={parts.length+1} total={total}/>)

        return result
        }
        return getParts()
    }

export default Content