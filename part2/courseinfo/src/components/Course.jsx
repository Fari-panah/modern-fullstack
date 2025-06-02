const Header=({name}) =><h1>{name}</h1>
const Content =({parts})=>parts.map(part => <Part key={part.id} part={part}/>)
const Part=({part}) => <p>{part.name} {part.exercises}</p>
const Total= ({parts}) => <p>total of {parts.reduce((s,p) => s +p.exercises,0)} exercises</p>

const Course= ({course}) => {
   
    return(
        <div>
          <Header name={course.name}/>
          <Content parts={course.parts}/>
           <Total  parts={course.parts}/>
        </div>
    )

}
export default Course