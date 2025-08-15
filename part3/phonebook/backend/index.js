require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Person = require('./models/person')
const morgan = require('morgan')
const app = express()

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }else if (error.name === 'ValidationError'){
    const messages = Object.values(error.errors).map(e => e.message)
    //return response.status(400).json({error: error.message})
    return response.status(400).json({ error: messages.join(', ') })
  }

  next(error)
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(express.json())  //Receiving data
app.use(cors())
app.use(express.static('dist'))
app.use(requestLogger)

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :type :post-data'))

app.get('/', (request, response) => {
  response.send('<h1>Hello World!!</h1>')
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})


app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then(person => {
      if(person) {
        response.json(person)
      }else{
        response.status(404).end()
      }
    })
    .catch((error) => next(error))

})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndDelete(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch((error) => next(error))

  // const id = request.params.id
  // persons = persons.filter(p => p.id !== id)

  // response.status(204).end()
})

app.post('/api/persons', (request, response, next) => {
  const body = request.body
  if (!body.name || !body.number){
    return response.status(400).json({ error: 'name or number missing' })
  }
  const person = new Person({
    name: body.name,
    number: body.number
  })
  person.save().then(savedPerson => {
    response.json(savedPerson)

  })
    .catch(error => next(error))

})

app.put('/api/persons/:id', (request, response, next) => {
  const { number } = request.body

  Person.findById(request.params.id)
    .then(person => {
      if (!person) {
        return response.status(404).end()
      }
      person.number = number

      return person.save().then(updatedPerson => {
        response.json(updatedPerson)
      })

    })
    .catch((error) => next(error))
})

app.use(unknownEndpoint)
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
