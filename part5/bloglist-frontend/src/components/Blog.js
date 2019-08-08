import React, {useState} from 'react'
const Blog = ({ blog }) => {

  const [showInfo, setShowInfo] = useState(false)

return(
  <div style={{border:"2px solid black"}}>
    <h5 onClick={()=>setShowInfo(!showInfo)}>Title: {blog.title} <i>Author: {blog.author}</i></h5>
    <div style={{display:`${showInfo?'block':'none'}`}}>
      <p>Url: {blog.url} </p>
      <p>Likes: <button>like</button></p>
    </div>
  </div>
)
}

export default Blog