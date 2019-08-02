import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({heading}) => (<h1>{heading}</h1>);
const Button = ({text, handleClick}) => (<button onClick={handleClick}>{text}</button>)
const Result = ({good, neutral, bad}) => {
    return(<>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
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

    return(<>
<Header heading={"give feedback"}/>
<Button text="Good" handleClick={goodClick}/>
<Button text="Neutral" handleClick={neutralClick}/>
<Button text="Bad" handleClick={badClick}/>
<Header heading={"Statistics"}/>
<Result good={goodCount} bad={badCount} neutral={neutralCount}/>
    </>)
}

ReactDOM.render(<App />, document.getElementById('root'));