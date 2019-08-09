import React, { useState, useEffect } from 'react'
import blogService from '../services/blogs'
const Blog = ({ blog, setAlert, user }) => {

  const [showInfo, setShowInfo] = useState(false)
  const [showDel, setShowDel] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await blogService.getBlog({ id: blog.id })
      if (response.user === user.uid.toString()) {
        setShowDel(true)
      } else {
        setShowDel(false)
      }
    }
    fetchData()
  })

  const handleLike = async () => {
    try {
      const response = await blogService.updateBlog({ id: blog.id, likes: blog.likes + 1 })
      setAlert({ message: `${response.title} Liked!`, error: false })
      setTimeout(() => {
        setAlert({ message: '', error: false })
      }, 3000)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async () => {
    const confirm = window.confirm(`remove Blog ${blog.title} ${blog.author}`)
    if (confirm) {
      try {
        await blogService.deleteBlog({ id: blog.id })
        setAlert({ message: 'Deleted!', error: false })
        setTimeout(() => {
          setAlert({ message: '', error: false })
        }, 3000)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div style={{ border: '2px solid black' }}>
      <h5 className='show-info' onClick={() => setShowInfo(!showInfo)}>Title: {blog.title} <i>Author: {blog.author}</i></h5>
      <div className='more-info' style={{ display: `${showInfo ? 'block' : 'none'}` }}>
        <p>Url: {blog.url} </p>
        <p>Likes: {blog.likes} <button onClick={() => handleLike()}>like</button></p>
        {showDel ? (<button onClick={() => handleDelete()}>delete</button>) : ''}
      </div>
    </div>
  )
}

export default Blog