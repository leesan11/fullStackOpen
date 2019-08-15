import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSpecificBlog, changeLikes, getSpecificComments,addComment, resetComments } from '../reducers/blogReducer'
import {Card, Button, Container, Input} from 'semantic-ui-react'

const User = (props) => {

    useEffect(()=>{
        props.resetComments()
        const fetchData = async () =>{
            const user = await props.getSpecificBlog({id: props.id})
            const comments = await props.getSpecificComments({blog_id: props.id})
            
        }
        fetchData()
    },[props.likes])

    const handleLike = async () => {

        const response = await props.changeLikes({id:props.id, likes: props.specificBlog.likes+1})
        
    }

    const handleAddComment = ()=>{
        event.preventDefault()
        props.addComment({
            blog_id:props.id, comment: event.target.comment.value
        })
        event.target.comment.value =''
    }

    const showBlog = () => {
       
        if(props.specificBlog){
            
            return <Container style={{textAlign:'center'}}>
                <Card style={{margin:'auto'}}>
                <h3>{props.specificBlog.title}</h3>
                <span>{props.specificBlog.author}</span>
                <span>{props.specificBlog.url}</span>
                <span>{props.specificBlog.likes} <Button primary onClick={handleLike}>Like</Button></span>
                </Card>
                <Card style={{margin:'auto', marginTop:'10px'}}>
                    <h5>Comments</h5>
                    {props.comments!==undefined?props.comments.map(comment=><li>{comment}</li>):''}
                </Card>
                <form onSubmit={handleAddComment} style={{margin:'auto', marginTop:'10px'}}>
                <Input name='comment'/>
                <Button primary >Add Comment</Button>
                </form>
            </Container>
        }
        else{
            return ''
        }
    }

    return showBlog()
}

const mapStateToProps = (state) => ({
    specificBlog: state.blog.specificBlog,
    comments: state.blog.comments,
    likes: state.blog.likes
})

const connectedBlog = connect(mapStateToProps, {getSpecificBlog, changeLikes, getSpecificComments, addComment, resetComments})(User)

export default connectedBlog