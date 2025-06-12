const express = require('express')
const app = express()

app.use(express.json())


let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)

})

app.get('/info', (request, response) => {
    const count = persons.length
    const date = new Date()

    response.send(`Phonebook has info for ${count} people ${date}`)
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const person = persons.find(p => p.id === id)
    if (person){
        response.json(person)
    }else {
        response.status(404).send('not found')
    }
})
app.delete('/api/persons/:id', (request, response) => {
   const id = request.params.id
   const person = persons.filter(p => p.id !== id)
   response.json(person) 

})
app.post('/api/persons', (request, response) => {
    const person = request.body 
    if (!person.name || !person.number){
      return response.status(400).json({ error: 'name or number is missing' })
    }
    const nameExist = persons.find(p => p.name === person.name)
    if (nameExist){
      return response.status(400).json({error: 'name must be unique'})
    }
    person.id = String(Math.floor(Math.random()* 10000))    
    persons = persons.concat(person)
    console.log(person)
    response.json(person)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
