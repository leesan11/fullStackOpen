import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (<button onClick={handleClick}>{text}</button>)
const Header = ({ text }) => (<h1>{text}</h1>)
const MostVotes = ({ anecdote, votes }) => {
    return (
        <>
            <p>{anecdote}</p>
            <p>has {votes} votes</p>
        </>
    )
}

const App = ({ anecdotes }) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVote] = useState(Array(anecdotes.length).fill(0))
    const [mostVotedIndex, setMostVotedIndex] = useState(0)
    const showAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length))
    
    const addVote = () => {
        let copy = [...votes]
        copy[selected]++
        setVote(copy)
        getMostVoted(copy)
    }
    const getMostVoted = (votes) => {
        let largest = Math.max(...votes)
        let index = votes.indexOf(largest)
        setMostVotedIndex(index);
    }

    return (<>
        <Header text={"Anecdote of the Day"} />
        <div>
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
        </div>
        <Button handleClick={showAnecdote} text={"show anecdote"} />
        <Button handleClick={addVote} text={"vote"} />
        <Header text={"Anecdote with Most Votes"} />
        <MostVotes anecdote={anecdotes[mostVotedIndex]} votes={votes[mostVotedIndex]} />
    </>)
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)