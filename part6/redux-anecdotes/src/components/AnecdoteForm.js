import React from 'react'
import { connect } from 'react-redux'
import {createAnecdote} from '../reducers/anecdoteReducer'
import {notify} from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdote'


const AnecdoteForm = (props) => {

    const create = async (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        const response = await anecdoteService.createNew({content:anecdote, votes:0})
        props.createAnecdote(response.content)
        props.notify(`created ${anecdote}`)
      }

    return (
        <form onSubmit={create}>
        <div><input type='text' name='anecdote' /></div>
        <button type='submit' >create</button>
      </form>
    )

}

const mapDispatchToProps = {
  createAnecdote, notify
}

const connectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)

export default connectedAnecdoteForm