/* eslint-disable no-unreachable */
import React from 'react'
import {incrementVotes} from '../reducers/anecdoteReducer'

const AnecdoteList = ({store}) => {
    const anecdotes = store.getState()
    const vote = (id) => {
        store.dispatch(incrementVotes(id))
      }

    return (<>{(anecdotes.sort((b, a)=>a.votes-b.votes)).map(anecdote =>
            (<div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id)}>vote</button>
              </div>
            </div>)
          )}</>)
    
}

export default AnecdoteList