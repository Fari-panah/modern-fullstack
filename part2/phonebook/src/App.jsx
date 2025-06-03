import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterQuery, setFilterQuery] = useState('')
  const handlePersons= (event) =>{
    event.preventDefault()
    if (persons.find(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
    } else{
      const newPerson= {name: newName, number: newNumber}

      setPersons(persons.concat(newPerson ))
      setNewName('')
      setNewNumber('')

    }
  }
  // const handleNewName = (event)=> setNewName(event.target.value)
  // const handleNewNumber = (event) => setNewNumber(event.target.value)
  const handleChanges = setValue => (event) => setValue(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <div>input shown with<input value={filterQuery} onChange={handleChanges(setFilterQuery)} /></div>
      <h2>add a new</h2>
      <form  onSubmit={handlePersons}>
        <div>
          name: <input value={newName} onChange={handleChanges(setNewName)}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleChanges(setNewNumber)}/>
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter(person => person.name.toLowerCase().includes(filterQuery)).map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App
