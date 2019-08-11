/* eslint-disable no-unreachable */
import React from 'react'
import { connect } from 'react-redux'
import {incrementVotes} from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    
    const vote = (id, content, votes) => {
        props.incrementVotes({id, content, votes: votes + 1})
        props.setNotification(`voted for ${content}`, 3)
      }

    return (props.visibleAnecdotes.map(anec => 
            <div key={anec.id}>
              <div>
                {anec.content}
              </div>
              <div>
                has {anec.votes}
                <button onClick={() => vote(anec.id, anec.content, anec.votes)}>vote</button>
              </div>
            </div>
          ))
    
}
const anecdotesToShow = ({anecdote, filter}) => {
  return anecdote.sort((b, a)=>a.votes-b.votes).filter(anec=>(anec.content).indexOf(filter) !==-1 && filter !=='') 
}
const mapStateToProps = (state) => {
  return {
    visibleAnecdotes : anecdotesToShow(state)
  }
}

const mapDispatchToProps = {
  incrementVotes, setNotification
}

const ConnetectedAnnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)
export default ConnetectedAnnecdoteList