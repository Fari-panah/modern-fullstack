import Person from "./Person"
const Persons = ({persons, query, handleRemovePerson}) =>{
    return (
        <div>
              {persons.filter(person => person.name.toLowerCase().includes(query)).map(person => <Person   key={person.id} name={person.name} number={person.number} handleRemovePerson={handleRemovePerson(person.id, person.name)}/>)}
        </div>
        
    )
}
  
export default Persons