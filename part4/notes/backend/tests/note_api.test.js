const { test, after, beforeEach, describe } = require('node:test')
const assert = require('node:assert')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const helper = require('./test_helper')
const Note = require('../models/note')
const User = require('../models/user')

const api = supertest(app)

/*beforeEach(async () => {
  await Note.deleteMany({})
  let noteObject = new Note(helper.initialNotes[0])
  await noteObject.save()
  noteObject = new Note(helper.initialNotes[1])
  await noteObject.save()
})*/
describe('when there is initially some notes saved', () => {
  beforeEach(async () => {
    await Note.deleteMany({})
    await Note.insertMany(helper.initialNotes)
  })

  test('notes are returned as json', async () => {
    console.log('entered test')
    await api
      .get('/api/notes')
      .expect(200)
      //regex instead of an exact string
      .expect('Content-Type', /application\/json/)
  })

  test('all notes are returned', async () => {
    const response = await api.get('/api/notes')

    assert.strictEqual(response.body.length, helper.initialNotes.length)
  })

  test('a valid note can be added', async () => {
    const newNote = {
      content: 'async/await simplifies making async calls',
      important: true,

    }
    await api
      .post('/api/notes')
      .send(newNote)
      .expect(201)
      .expect('Content-Type', /application\/json/)
    const notesAtEnd = await helper.notesInDb()
    assert.strictEqual(notesAtEnd.length, helper.initialNotes.length + 1)
    const contents = notesAtEnd.map(n => n.content)
    assert(contents.includes('async/await simplifies making async calls'))

  })
  test('note without content is not added', async () => {
    const newNote = {
      important: true
    }

    await api
      .post('/api/notes')
      .send(newNote)
      .expect(400)

    const notesAtEnd = await helper.notesInDb()
    assert.strictEqual(notesAtEnd.length, helper.initialNotes.length)
  })
  test('fails with status code 400 if data invalid', async () => {
    const newNote = { important: true }

    await api.post('/api/notes').send(newNote).expect(400)

    const notesAtEnd = await helper.notesInDb()

    assert.strictEqual(notesAtEnd.length, helper.initialNotes.length)
  })
})

test('a specific note is within the returned notes', async () => {
  const response = await api.get('/api/notes')

  const contents = response.body.map(e => e.content)
  assert.strictEqual(contents.includes('HTML is easy'), true)
})
//deepStrictEqual:to check that the contents of the objects
test('a specific note can be viewed', async() => {
  const noteAtStart = await helper.notesInDb()
  const noteToView = noteAtStart[0]
  const resultNote = await api
    .get(`/api/notes/${noteToView.id}`)
    .expect(200)
    .expect('Content-Type', /application\/json/)
  assert.deepStrictEqual(resultNote.body, noteToView)

})
test('a note can be deleted', async() => {
  //use await only for promises.
  //Async functions always return a Promise
  const noteAtStart = await helper.notesInDb()
  const noteToDelete = noteAtStart[0]
  await api
    .delete(`/api/notes/${noteToDelete.id}`)
    .expect(204)
  const notesAtEnd = await helper.notesInDb()
  const ids = notesAtEnd.map(n => n.id)
  assert(!ids.includes(noteToDelete.id))
  assert.strictEqual(notesAtEnd.length, helper.initialNotes.length -1)

})
describe('when there is initially one user at db', () => {
  beforeEach(async () => {
    await User.deleteMany({})
    const passwordHash = await bcrypt.hash('sekret', 10)
    const user = new User({ username: 'root', passwordHash })
    await user.save()
  })
})
test('creation succeeds with a fresh username', async () => {
  const usersAtStart = await helper.usersInDb()
  
})


after(async () => {
  await mongoose.connection.close()
})