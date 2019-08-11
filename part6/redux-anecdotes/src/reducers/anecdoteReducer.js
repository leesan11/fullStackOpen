import anecdoteService from '../services/anecdote'

export const incrementVotes = (id) => {
  return {
    type:'VOTE',
    id: id
  }
}

export const createAnecdote = (anecdote) => {
  return {
    type: 'CREATE',
    newAnecdote: {
      content: anecdote,
      // id: getId(),
      votes: 0
    }
  }
}

export const initAnecdotes = () => {
  return async dispatch=>{
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT',
      data: anecdotes
    })
  } 
}

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  // eslint-disable-next-line default-case
  switch(action.type){
    case 'VOTE':
      const newState = state.map(obj => obj.id===action.id ? {...obj, votes: obj.votes+1}: obj)
      return newState
    case 'CREATE':
      return [...state, action.newAnecdote]
    case 'INIT':
      return action.data
  }
  return state
}

export default anecdoteReducer