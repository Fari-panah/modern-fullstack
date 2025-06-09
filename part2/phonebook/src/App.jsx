import { useState, useEffect } from 'react'
import Filter from "./components/Filter"
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
const App = () => {
  const [persons, setPersons] = useState([
    // { name: 'Arto Hellas', number: '040-123456', id: 1 },
    // { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    // { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    // { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterQuery, setFilterQuery] = useState('')

   useEffect(() =>{
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  }, [])
  const handlePersons= (event) =>{
    event.preventDefault()
    if (persons.find(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
    } else{
      const newPerson= {name: newName, number: newNumber}

      axios.post('http://localhost:3001/persons', newPerson)
      .then(response => setPersons(persons.concat(response.data )))

      setNewName('')
      setNewNumber('')

    }
  }
   const handleNewName = (event)=> setNewName(event.target.value)
   const handleNewNumber = (event) => setNewNumber(event.target.value)
   const handleFilterQuery = (event) => setFilterQuery(event.target.value)



  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterQuery} onChange={handleFilterQuery}/>
      <h2>add a new</h2>
      <PersonForm  name={newName} number ={newNumber} handleNewName={handleNewName} handleNewNumber={handleNewNumber} handlePersons={handlePersons}/>
      <h2>Numbers</h2>
      <Persons persons={persons} query={filterQuery}/>
    </div>
  )
}

export default App
