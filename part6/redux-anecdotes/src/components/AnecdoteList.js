/* eslint-disable no-unreachable */
import React from 'react'
import { connect } from 'react-redux'
import {incrementVotes} from '../reducers/anecdoteReducer'
import {notify} from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    
    const vote = (id, content) => {
        props.incrementVotes(id)
        props.notify(content)
      }

    return (props.visibleAnecdotes.map(anec => 
            <div key={anec.id}>
              <div>
                {anec.content}
              </div>
              <div>
                has {anec.votes}
                <button onClick={() => vote(anec.id, anec.content)}>vote</button>
              </div>
            </div>
          ))
    
}
const anecdotesToShow = ({anecdote, filter}) => {
  return anecdote.sort((b, a)=>a.votes-b.votes).filter(a=>(a.content).indexOf(filter) !==-1 && filter !=='') 
}
const mapStateToProps = (state) => {
  return {
    visibleAnecdotes : anecdotesToShow(state)
  }
}

const mapDispatchToProps = {
  incrementVotes, notify
}

const ConnetectedAnnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)
export default ConnetectedAnnecdoteList