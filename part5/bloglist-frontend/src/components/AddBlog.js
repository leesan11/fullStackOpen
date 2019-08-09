import React from 'react'
import { useState } from 'react'
import blogService from '../services/blogs'
import  { useField } from '../hooks/index'
const AddBlog = ({ setAlert }) => {

  const title = useField('title')
  const author = useField('author')
  const url = useField('url')

  const [visible, setVisible] = useState('none')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const addBlog = {
        title:title.value,
        author:author.value,
        url:url.value
      }
      const response = await blogService.addBlog(addBlog)
      setAlert({ message: `Blog Added ${response.title} by ${response.author}`, error: false })
      title.clearField()
      author.clearField()
      url.clearField()
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


  return (
        <>
            <form style={{ display: `${visible}` }}>
              <label>Title</label>
              <input {...title} />
              <br />
              <label>Author</label>
              <input {...author} />
              <br />
              <label>Url</label>
              <input {...url} />
              <br />
              <button type="submit" onClick={(e) => handleSubmit(e)}>Add Blog</button>
            </form>
            <button onClick={() => setVisible(visible === 'none' ? 'block' : 'none')}>{visible === 'none' ? 'new Blog' : 'cancel'}</button>
        </>
  )

}

export default AddBlog