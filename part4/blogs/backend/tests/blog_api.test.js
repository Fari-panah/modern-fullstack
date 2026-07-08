const { test, beforeEach } = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')
const helper = require('./test_helper')

const api = supertest(app)

beforeEach(async () => {
  await Blog.deleteMany({})
  await Blog.insertMany(helper.initialBlogs)
})


test('blogs returned as json', async() => {
  await api
    .get('/api/blogs')
    .expect(200)
    //regex instead of an exact string
    .expect('Content-Type', /application\/json/)
})

test('')
