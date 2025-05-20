import { useState } from 'react'
const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <h3>you are {props.age}</h3>
      <p>Welcome to React</p>
    </div>
  )

}



const App = () => {
  const friends = ['sara ',' reza']
  

  return (
    <div>
     <h1>Greeting</h1>
     <p>{friends}</p>
      
    </div>
  )
}

export default App


