import React from 'react'
import { connect } from 'react-redux'
import {createAnecdote} from '../reducers/anecdoteReducer'
import {setNotification} from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

    const create = async (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        props.createAnecdote(anecdote)
        props.setNotification(`created ${anecdote}`,5)
      }

    return (
        <form onSubmit={create}>
        <div><input type='text' name='anecdote' /></div>
        <button type='submit' >create</button>
      </form>
    )

}

const mapDispatchToProps = {
  createAnecdote, setNotification
}

const connectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)

export default connectedAnecdoteForm