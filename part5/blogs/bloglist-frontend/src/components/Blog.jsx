import { useState } from 'react'
const Blog = ({ blog, increseLike, user, removeBlog }) => {

  console.log('BLOG USER:', blog.user)
  console.log('LOGGED USER:', user)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  const [view, setView] = useState(false)

  const visibility = () => {
    setView(!view)
  }
  const addLike = () => {
    increseLike({
      ...blog,
      likes: blog.likes +1
    })

  }

  return (
    <div style={blogStyle}>
      <div>
        <div>{blog.title}</div>
        <div>{blog.author}
          <button onClick={visibility}>{view ? 'hide' : 'view'}</button></div>
      </div>
      {view && (
        <div>
          <div>{blog.url}</div>
          <div>likes {blog.likes}
            <button onClick={addLike}>like</button></div>
          {blog.user && blog.user.username === user.username &&(
            <button onClick={() => removeBlog(blog)}>
            remove
            </button>
          )}
        </div>
      )}
    </div>
  )
}
export default Blog