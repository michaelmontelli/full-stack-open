import React, { useState } from 'react'

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is the same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(getRandomInt(0, anecdotes.length))
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))


  const handleAnecdoteClick = () => {
    setSelected(getRandomInt(0, anecdotes.length))
  }

  const handleVoteClick = () => {
    const updatedVotes = [...votes]
    updatedVotes[selected] += 1

    setVotes(updatedVotes)
  }

  const mostPopularAnecdoteIndex = votes.indexOf(Math.max(...votes))

  return (
      <div>
        <h1>Anecdote of the Day</h1>
        <p>{anecdotes[selected]} has {votes[selected]} votes.</p>
        <button onClick={handleVoteClick}>Vote</button>
        <button onClick={handleAnecdoteClick}>Next anecdote</button>

        <h1>Anecdote with the Most Votes</h1>
        <p>{anecdotes[mostPopularAnecdoteIndex]} has {votes[mostPopularAnecdoteIndex]} votes.</p>
      </div>
  )
}

export default App





