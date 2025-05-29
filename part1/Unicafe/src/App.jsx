import { useState } from 'react'
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>


const App =() => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickBad = () => setBad(bad+1)
  const handleClickGood = () => setGood(good+1)
  const handleClickNeutral = () => setNeutral(neutral+1)

  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positive = total === 0? 0 : (good / total) * 100

  return (
    <>
    <h1>give feedback</h1>
    {/* <button onClick={() => setGood(good+1)}>good</button>
    <button onClick={() => setNeutral(neutral+1)} >neutral</button>
    <button onClick={() => setBad(bad+1)} >bad</button> */}
    <Button onClick= {handleClickGood} text="good" />
    <Button onClick={handleClickNeutral} text="neutral"/>
    <Button onClick={handleClickBad} text="bad"/>
    <h1>statics</h1>
    <p>good {good}</p>
    <p>neutral {neutral}</p> 
    <p>bad {bad}</p>
    <p>all {total}</p>
    <p>average {average}</p>
    <p>positive {positive} %</p>

    </>
  )
}

export default App
