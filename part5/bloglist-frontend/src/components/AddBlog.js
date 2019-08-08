import React from 'react'
import { useState } from 'react'
import blogService from '../services/blogs'

const AddBlog = ({ setAlert }) => {

  const [addBlog, setAddBlog] = useState({})
  const [visible, setVisible] = useState('none')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await blogService.addBlog(addBlog)
      setAlert({ message: `Blog Added ${response.title} by ${response.author}`, error: false })
      setTimeout(() => {
        setAlert({ message: '', error: false })
      }, 3000)
    } catch (error) {
      console.log(error)
      setAlert({ message: 'Unable to add. Missing Fields', error: true })
      setTimeout(() => {
        setAlert({ message: '', error: false })
      }, 3000)
    }
  }
  const onChangeProp = (type, e) => {
    let newBlog = addBlog
    newBlog[type] = e.target.value
    setAddBlog(newBlog)
  }

  return (
        <>
            <form style={{ display: `${visible}` }}>
              <label>Title</label>
              <input type="text" onChange={(e) => onChangeProp('title', e)} />
              <br />
              <label>Author</label>
              <input type="text" onChange={(e) => onChangeProp('author', e)} />
              <br />
              <label>Url</label>
              <input type="text" onChange={(e) => onChangeProp('url', e)} />
              <br />
              <button type="submit" onClick={(e) => handleSubmit(e)}>Add Blog</button>
            </form>
            <button onClick={() => setVisible(visible === 'none' ? 'block' : 'none')}>{visible === 'none' ? 'new Blog' : 'cancel'}</button>
        </>
  )

}

export default AddBlog