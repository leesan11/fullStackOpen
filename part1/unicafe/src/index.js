import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({heading}) => (<h1>{heading}</h1>);
const Button = ({text, handleClick}) => (<button onClick={handleClick}>{text}</button>)
const Result = ({good, neutral, bad, all, average, positive}) => {
    return(<>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>All: {all}</p>
    <p>Average: {average}</p>
    <p>Positive: {positive}</p>
    </>)
}   

const App = () => {
// implement states here
const [goodCount, goodSet] = useState(0);
const [neutralCount, neutralSet] = useState(0);
const [badCount, badSet] = useState(0);

const goodClick = () => goodSet(goodCount+1)
const neutralClick = () => neutralSet(neutralCount+1)
const badClick = () => badSet(badCount+1)
let all = goodCount + badCount + neutralCount
let average = (goodCount + (-1 * badCount))/all
let positive = goodCount*100/all + "%"

    return(<>
<Header heading={"give feedback"}/>
<Button text="Good" handleClick={goodClick}/>
<Button text="Neutral" handleClick={neutralClick}/>
<Button text="Bad" handleClick={badClick}/>
<Header heading={"Statistics"}/>
<Result good={goodCount} bad={badCount} neutral={neutralCount} all={all} average={! isNaN(average)?average:0} positive={! isNaN(positive)?positive:0}/>
    </>)
}

ReactDOM.render(<App />, document.getElementById('root'));