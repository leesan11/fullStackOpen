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

  const handleDelete = async () => {
    const confirm = window.confirm(`remove Blog ${blog.title} ${blog.author}`)
    if(confirm){
    try{
      await blogService.deleteBlog({id:blog.id})
      setAlert({message:`Deleted!`, error:false})
      setTimeout(()=>{
        setAlert({message:'',error:false})
      },3000)
    }catch(error){
      console.log(error)
    }
  }

  }

  return (
    <div style={{ border: "2px solid black" }}>
      <h5 onClick={() => setShowInfo(!showInfo)}>Title: {blog.title} <i>Author: {blog.author}</i></h5>
      <div style={{ display: `${showInfo ? 'block' : 'none'}` }}>
        <p>Url: {blog.url} </p>
        <p>Likes: {blog.likes} <button onClick={() => handleLike()}>like</button></p>
        <button onClick={()=>handleDelete()}>delete</button>
      </div>
    </div>
  )
}

export default Blog