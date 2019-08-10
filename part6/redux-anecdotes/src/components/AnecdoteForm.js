import React from 'react'
import {createAnecdote} from '../reducers/anecdoteReducer'

const AnecdoteForm = ({store}) => {

    const create = (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        store.dispatch(createAnecdote(anecdote))
      }

    return (
        <form onSubmit={create}>
        <div><input type='text' name='anecdote' /></div>
        <button type='submit' >create</button>
      </form>
    )

}

export default AnecdoteForm