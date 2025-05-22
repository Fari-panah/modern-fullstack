const Header = (props) => {
  return(
    <div>
      {props.course}
    </div>
  )

}
const Content = (props) => {
  console.log(props)

  return(
    <div>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )

}
const Part = (props) => {
  console.log(props)

  return(
    <div>
      {props.name}  {props.exercises}
    </div>
  )

}
const Total = (props) => {
  return(
    <div>
      sum of exercises {props.sum}
    </div>
  )

}



const App = () => {
  const course = 'Half Stack application development'
  
 const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return(
    <div>
      <Header course={course}/>
      <Content  parts={parts}  /> 
      <Total sum = {parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
      
    </div>
  )
}

export default App
