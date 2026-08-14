import { useState } from "react"
const Blog = ({ blog }) => {
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
  return (
    <div style={blogStyle}>      
      <div>
        {blog.title} 
        <button onClick={visibility}>{view ? 'hide' : 'view'}</button>
      </div>
      {view && (
        <div>
          {blog.url}
          <br />
          likes {blog.likes}
          <button>like</button>
          <br />
          {blog.author}
        </div>
      )}
     
    </div> 
  )

}

export default Blog