import { useState } from "react"
// const Button = (props) => {
//   return (
//     <button onClick={props.onClick}>
//       {props.text}
//     </button>
//   )
// }
// const Display = (props) => {
//   return (
//     <div>{props.counter}</div>
//   )
// }

// const  App = () => {
  // const [counter, setCounter] = useState(0)
  // const increaseByOne = () => setCounter(counter + 1)
  // const decreaseByOne = () => setCounter(counter - 1)
  // const setToZero = () => setCounter(0)
 

  //  return (
  //   <div>
  //     <Display counter={counter}/>
  //     <Button   onClick={increaseByOne}   text='plus'/>
  //     <Button   onClick={setToZero}   text='zero' /> 
  //     <Button   onClick={decreaseByOne}  text='minus' />               </div>
  // )
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  // const [allClicks, setAllClicks] = useState([])
  //const [total, setTotal] = useState(0)

  // const handleLeftClick = ()=> {
  //   setAllClicks(allClicks.concat('L'))
  //   console.log(left)
  //    const updatedLeft = left + 1
  //   setLeft(updatedLeft)
  //   console.log(left)
   
  //   setTotal(updatedLeft+ right)
  //   console.log(left)
  // }
  // const handleRightClick = () => {
  //   setAllClicks(allClicks.concat('R'))
  //   setRight(right+1)
  // }

  // const History = (props) => {
  //   console.log(props)
  //    console.log(props.allClicks)

  //     if (props.allClicks.length === 0) {  
  //     return (
  //             <div>
  //                the app is used by pressing the buttons 
  //             </div>
  //                 )
  //               }
  //                 return (
  //                       <div> 
  //                           button press history: {props.allClicks.join(' ')} 
  //                       </div>
  //                         )}
  // const Button = (props) =>{
  //   <button onClick={props.onClick}>{props.text}</button>
  // }
  //  const [value, setValue] = useState(10)
  //  const hello =(newValue)=> () => {
  //     console.log( newValue)
  //     setValue(newValue)
  //   }
  

 
  // return(
  //   <div>
     {/*} {left}
     <button onClick={handleLeftClick}>left</button>
     {right}
     <button onClick={handleRightClick}>right</button>
     <p>{allClicks.join(' ')}</p>
     {/*<p>total {total}</p>*/}
     {/* <Button onClick={handleLeftClick} text={left} />
     <Button onClick={handleRightClick}  text={right} />
     <History allClicks={allClicks}/> */}
  //          <button onClick={hello(0)}>reset</button>
  //         //  <button onClick={hello(value+1)}>increase</button>
       
  //   </div>
  // )
// }

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      {value}
      <button onClick={()=> setToValue(1000)}>
        thousand
      </button>
      <button onClick={()=> setToValue(0)}>
        reset
      </button>
      <button onClick={()=>setToValue(value + 1)}>
        increment
      </button>
    </div>
  )
}

export default App
