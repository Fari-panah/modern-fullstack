const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

morgan.token('type', function (req, res) {
  return req.headers['content-type']
})
morgan.token('post-data', function (req, res) {
  return req.method === 'POST' ? JSON.stringify(req.body) : ''
})
app.use(express.json())  //Receiving data
app.use(cors())

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :type :post-data'))

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

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
    const numberOfPersons = persons.length
    response.send(`Phonebook has info for ${numberOfPersons} people<br>${new Date()}`)

})
app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  const person = persons.find(p=> p.id === id)
  
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }

})
app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const person = persons.filter(p => p.id !== id)
    
    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const person = request.body

    if (!person.name || !person.number) {
        return response.status(400).json({ error: 'Name or number missing' })
    }
    const existPerson = persons.find(person => person.name === person.name)
    if(existPerson){
        return response.status(400).json({ error: 'name must be unique' })
    }
    person.id = Math.floor(Math.random() * 1000000)
    persons = persons.concat(person)

    response.json(persons)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
