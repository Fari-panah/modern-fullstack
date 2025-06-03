import Person from "./Person"
const Persons = ({persons, query}) =>{
    return (
        <div>
              {persons.filter(person => person.name.toLowerCase().includes(query)).map(person => <Person   key={person.name} name={person.name} number={person.number}/>)}
        </div>
        
    )
}
  
export default Persons