import React, { useState } from 'react'
import blogService from '../services/blogs'
const Blog = ({ blog, setAlert }) => {

  const [showInfo, setShowInfo] = useState(false)

  const handleLike = async () => {
    try {
      const response = await blogService.updateBlog({ id: blog.id, likes: blog.likes + 1 })
      setAlert({message:`${response.title} Liked!`, error:false})
      setTimeout(()=>{
        setAlert({message:'',error:false})
      },3000)
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div style={{ border: "2px solid black" }}>
      <h5 onClick={() => setShowInfo(!showInfo)}>Title: {blog.title} <i>Author: {blog.author}</i></h5>
      <div style={{ display: `${showInfo ? 'block' : 'none'}` }}>
        <p>Url: {blog.url} </p>
        <p>Likes: {blog.likes} <button onClick={() => handleLike()}>like</button></p>
      </div>
    </div>
  )
}

export default Blog