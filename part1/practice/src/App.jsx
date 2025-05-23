import { useState } from 'react'


const  App = () => {
  const [counter, setCounter] = useState(0)


  return (
    <>
    <div>{counter}</div>
    <button onClick={() => setCounter(counter+1)}>+</button>
    <button onClick={()=> setCounter(counter-1)}>-</button>
    <button onClick={()=> setCounter(0)}>0</button>
    
    </>
  )
}

export default App
