import React, {useEffect} from 'react'
import { getAllUsers } from '../reducers/usersReducer'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Card } from 'semantic-ui-react'

const Users = (props) => {
    useEffect(()=>{
        props.getAllUsers()
        console.log('props',props)
    },[])

    return (
        <Container>
            {props.usersList.length>0?props.usersList.map(user=><Card key={user.id} style={{margin:'auto', marginTop:'10px'}}><Link to={`/users/${user.id}`}><h4>{user.name}</h4></Link><span>Blogs Created: {user.blogs.length}</span></Card>):''}
        </Container>
    )
}

const mapStateToProps = (state) =>(
{
    usersList: state.users
}
)


const connectedUsers = connect(mapStateToProps,{getAllUsers})(Users)

export default connectedUsers