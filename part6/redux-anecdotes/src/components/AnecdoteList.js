/* eslint-disable no-unreachable */
import React from 'react'
import {incrementVotes} from '../reducers/anecdoteReducer'
import {notify} from '../reducers/notificationReducer'

const AnecdoteList = ({store}) => {
    const {anecdote, filter} = store.getState()
    const vote = (id, content) => {
        store.dispatch(incrementVotes(id))
        store.dispatch(notify(content))
      }
      
    

    return (<>{(anecdote.sort((b, a)=>a.votes-b.votes)).filter(a=>(a.content).indexOf(filter) !==-1 && filter !=='' ).map(anec => 
            (<div key={anec.id}>
              <div>
                {anec.content}
              </div>
              <div>
                has {anec.votes}
                <button onClick={() => vote(anec.id, anec.content)}>vote</button>
              </div>
            </div>)
          )}</>)
    
}

export default AnecdoteList