const { test } = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')

const api = supertest(app)


test('blogs returned as json', async() => {
  await api
    .get('/api/blogs')
    .expect(200)
    //regex instead of an exact string
    .expect('Content-Type', /application\/json/)
})