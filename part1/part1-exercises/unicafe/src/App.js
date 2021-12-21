import React, { useState } from 'react'


const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)


const StatisticLine = (props) => (
    <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
    </tr>
)



const Statistics = (props) => {
    const [good, neutral, bad, all] = props.states
    const average = (good + neutral + bad) / 3
    const positivePercentage = good / all

    if (all === 0) {
        return (
            <div>
                <h1>Statistics</h1>
                <div>No feedback given</div>
            </div>
        )
    }

    return (
        <div>
            <h1>Statistics</h1>
            <table>
                <StatisticLine text="good" value={good} />
                <StatisticLine text="neutral" value={neutral} />
                <StatisticLine text="bad" value={bad} />
                <StatisticLine text="all" value={all} />
                <StatisticLine text="average" value={average} />
                <StatisticLine text="positive percentage" value={positivePercentage} />
            </table>
        </div>
    )

}


const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)

    const states = [good, neutral, bad, all]

    const handleGoodClick = () => {
        setAll(all + 1)
        setGood(good + 1)
    }

    const handleNeutralClick = () => {
        setAll(all + 1)
        setNeutral(neutral + 1)
    }

    const handleBadClick = () => {
        setAll(all + 1)
        setBad(bad + 1)
    }

    return (
        <div>
            <h1>Give Feedback</h1>
            <Button handleClick={handleGoodClick} text="good" />
            <Button handleClick={handleNeutralClick} text="neutral" />
            <Button handleClick={handleBadClick} text="bad" />

            <Statistics states={states}/>
        </div>
    )
}

export default App
