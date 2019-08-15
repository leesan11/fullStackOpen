import React from 'react'
import { connect } from 'react-redux'
import { addBlog } from '../reducers/blogsReducer'

const NewBlog = (props) => {

    const handleSubmit = () => {
        event.preventDefault()
        props.addBlog({
            title: event.target.title.value,
            author: event.target.author.value,
            url: event.target.url.value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input id='title' name='title'/>
            <label>URL</label>
            <input id='url' name='url' />
            <label>Author</label>
            <input id='author' name='author' />
            <button>Add Blog</button>
        </form>
    )
}

const connectedNewBlog = connect(null,{addBlog})(NewBlog)
export default connectedNewBlog