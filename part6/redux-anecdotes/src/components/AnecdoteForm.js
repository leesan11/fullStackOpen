import React from 'react'
import {createAnecdote} from '../reducers/anecdoteReducer'
import {notify} from '../reducers/notificationReducer'


const AnecdoteForm = ({store}) => {

    const create = (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        store.dispatch(createAnecdote(anecdote))
        store.dispatch(notify(`created ${anecdote}`))
      }

    return (
        <form onSubmit={create}>
        <div><input type='text' name='anecdote' /></div>
        <button type='submit' >create</button>
      </form>
    )

}

export default AnecdoteForm