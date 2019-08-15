import React,{ useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { initBlogs } from '../reducers/blogsReducer'
import { Container } from 'semantic-ui-react'

const Blogs = (props) => {

    useEffect(()=>{
        props.initBlogs()
    },[])
    
    return (
        <Container style={{textAlign:'center'}}>
            <h1>Blogs: </h1>
    {(props.blogsList).length > 0 ? props.blogsList.map(blog=><div key={blog.id}><Link to={`/blogs/${blog.id}`}><h5>Title: {blog.title} <i style={{color:'red'}}>-{blog.author}</i></h5></Link><hr/></div>):''}
    </Container>
    )
}

const mapStatetoProps = (state) => ({
    blogsList: state.blogs
})

const connectedBlogs = connect(mapStatetoProps,{ initBlogs })(Blogs)

export default connectedBlogs