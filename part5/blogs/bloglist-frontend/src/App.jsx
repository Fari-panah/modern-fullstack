import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import Notification from './components/Notification'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
  const [message, setMessage] = useState(null)
 
 
  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const addBlog = event => {
    event.preventDefault()
    const blogObject = {
      title,
      author,
      url
    }
    blogService
    .create(blogObject)
    .then(returnedBlog =>{
      setBlogs(blogs.concat(returnedBlog))
      setMessage(`a new blog ${returnedBlog.title} by ${returnedBlog.author} added`)
      setTitle('')
      setAuthor('')
      setUrl('')
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    })
  }

  const handleLogin = async event => {
      event.preventDefault()
      try {
        const user = await loginService.login({ username, password })
        window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      ) 
        
        blogService.setToken(user.token)
        setUser(user)
        setUsername('')
        setPassword('')
        
      } catch {
        setMessage('wrong username or password')

        setTimeout(() => {
        setMessage(null)
      }, 5000)
      }
    }
  const handleLogout = () => {
    window.localStorage.removeItem('loggedBlogappUser')
    setUser(null)
  }

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <h2>log in to application</h2>
      <div>
        <label >
          username
          <input type="text"  value={username}
            onChange={({target}) => setUsername(target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          password
          <input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>
      </div>
      <button type="submit">login</button>
    </form>
  )
  const blogList = () => (
    <div>
      
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>


  )

  return (
    <div>
      <Notification message= {message}/>
      {!user && loginForm()}
      {user && (
        <div>
          <h2>blogs</h2>
          <p>{user.name} logged in
            <button onClick={handleLogout}>logout</button>
          </p>
          <h2>create new</h2>
          <form onSubmit={addBlog}>
            <div>
              <label>
              title:
              <input type="text" value={title} onChange={({ target }) => setTitle(target.value)}/>
            </label>
            </div>
            <div>
              <label>
              author:
              <input type="text"  value={author} onChange={({ target }) => setAuthor(target.value)}/>
            </label>
            </div>
            <div>
              <label>
              url:
              <input type="text"  value={url} onChange={({ target }) => setUrl(target.value)}/>
            </label>
            </div>
            <button type='submit'>create</button>
          </form>
          {blogList()}
        </div>

      )}
    </div>
  )
}

export default App