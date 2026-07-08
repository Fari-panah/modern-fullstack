const { test, beforeEach } = require('node:test')
const assert = require('node:assert')
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

test('the unique identifier property of blog posts is named id', async () => {
  const response = await api.get('/api/blogs')

  const blog = response.body[0]

  assert(blog.id !== undefined) //the id property or field there is
  assert.strictEqual(blog._id, undefined) //(actual, expected)
})
