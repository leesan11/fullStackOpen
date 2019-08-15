import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSpecificUser } from '../reducers/userReducer'
import { Container, Card } from 'semantic-ui-react'

const User = (props) => {

    useEffect(()=>{
        
        const fetchData = async () =>{
            const user = await props.getSpecificUser(props.id)
            console.log('props',props)
        }
        fetchData()
    },[])

    const showBlogs = () => {
        if(Object.keys(props.specificUser).length>0){
            console.log(props.specificUser)
            return (<Container style={{textAlign:'center'}}>
                <h3>User: {props.specificUser.username}</h3>
            {props.specificUser.blogs.map(blog=><Card style={{margin:'auto', marginTop:'10px'}} key ={blog.id}><h4>Title: {blog.title} <i style={{color:'red'}}>-{blog.author}</i></h4> <h5>url: {blog.url}</h5> <span>Likes: {blog.likes}</span></Card>)}
            </Container>)
        }
        else{
            return ''
        }
    }

    return showBlogs()
}

const mapStateToProps = (state) => ({
    specificUser: state.user
})

const connectedUser = connect(mapStateToProps, {getSpecificUser})(User)

export default connectedUser