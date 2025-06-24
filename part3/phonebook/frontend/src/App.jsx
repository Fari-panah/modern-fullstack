import { useState, useEffect } from 'react'
import Filter from "./components/Filter"
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import api from './api/personService'
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
    api.getAll()   
    .then(result => setPersons(result))
    }, [])
  const handlePersons= (event) =>{
    event.preventDefault()
    const newPerson= {name: newName, number: newNumber}
    const foundPerson = persons.find(p => p.name === newName)
    if (foundPerson){
      if(window.confirm(`${name} is already added to phonebook, replace the old number with a new one? `)){
        api.update(foundPerson.id, newPerson).then(returnedPerson =>
           {setPersons(persons.map(p =>(p.id !== foundPerson.id ? p : returnedPerson)))})
      }
    } else{
      api.create(newPerson)
      .then(addedPerson => setPersons(persons.concat(addedPerson)))

      setNewName('')
      setNewNumber('')

    }
  }
   const handleNewName = (event)=> setNewName(event.target.value)
   const handleNewNumber = (event) => setNewNumber(event.target.value)
   const handleFilterQuery = (event) => setFilterQuery(event.target.value)
   const handleRemovePerson = (id, name) => () => {
    if(window.confirm(`Delete ${name}?`)){
      api.remove(id)
      .then(deletedPerson => {
          setPersons(persons.filter(p =>p.name !== deletedPerson))

      })
      .catch(error => {
        alert(`${name} is already added to phonebook, replace the old number with a new one? `)
        setPersons(persons.filter(p => p.id !== id))
      })
       
      
    }}
        
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterQuery} onChange={handleFilterQuery}/>
      <h2>add a new</h2>
      <PersonForm  
      name={newName} 
      number ={newNumber} 
      handleNewName={handleNewName}
      handleNewNumber={handleNewNumber} 
      handlePersons={handlePersons}/>
      
      <h2>Numbers</h2>
      <Persons persons={persons} query={filterQuery} handleRemovePerson={handleRemovePerson}/>
    </div>
  )
}

export default App

