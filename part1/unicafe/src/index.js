import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({ heading }) => (<h1>{heading}</h1>);
const Button = ({ text, handleClick }) => (<button onClick={handleClick}>{text}</button>)
const Statistic = ({ text, stat }) => (<p>{text}: {stat}</p>)
const Statistics = ({goodCount,neutralCount,badCount,all,average,positive}) => {
    if(goodCount ||badCount ||neutralCount){
    return (<>
    <Statistic text={"good"} stat={goodCount} />
        <Statistic text={"neutral"} stat={neutralCount} />
        <Statistic text={"bad"} stat={badCount} />
        <Statistic text={"all"} stat={all} />
        <Statistic text={"average"} stat={!isNaN(average) ? average : 0} />
        <Statistic text={"positive"} stat={!isNaN(positive) ? positive : 0} />
        </>)
    }else{
        return <p>No feedback given</p>
    }
}

const App = () => {
    // implement states here
    const [goodCount, goodSet] = useState(0);
    const [neutralCount, neutralSet] = useState(0);
    const [badCount, badSet] = useState(0);

    const goodClick = () => goodSet(goodCount + 1)
    const neutralClick = () => neutralSet(neutralCount + 1)
    const badClick = () => badSet(badCount + 1)
    
    let all = goodCount + badCount + neutralCount
    let average = (goodCount + (-1 * badCount)) / all
    let positive = goodCount * 100 / all
    const statsObj = {
        goodCount:goodCount,
        badCount:badCount,
        neutralCount:neutralCount,
        all:all,
        average:average,
        positive:positive
    }
    return (<>
        <Header heading={"give feedback"} />
        <Button text="Good" handleClick={goodClick} />
        <Button text="Neutral" handleClick={neutralClick} />
        <Button text="Bad" handleClick={badClick} />
        <Header heading={"Statistics"} />
        <Statistics {...statsObj}/>

    </>)
}

ReactDOM.render(<App />, document.getElementById('root'));