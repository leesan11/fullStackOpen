import React from 'react';
import { create } from 'istanbul-reports';

const App = (props) => {
  const anecdotes = props.store.getState()
  const store = props.store
  const vote = (id) => {
    store.dispatch({
      type:'VOTE',
      id: id
    })
  }

  const create = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    store.dispatch({
      type: 'CREATE',
      content: anecdote
    })
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.sort((b,a)=>a.votes-b.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={create}>
        <div><input type='text' name='anecdote' /></div>
        <button type='submit' >create</button>
      </form>
    </div>
  )
}

export default App