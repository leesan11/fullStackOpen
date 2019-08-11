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
      
    return (<>{(props.anecdote.sort((b, a)=>a.votes-b.votes)).filter(a=>(a.content).indexOf(props.filter) !==-1 && props.filter !=='' ).map(anec => 
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

const mapStateToProps = (state) => {
  return {
    anecdote: state.anecdote,
    filter: state.filter
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