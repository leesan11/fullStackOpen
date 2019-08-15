import React,{ useState } from 'react'
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'
import { Menu, Button } from 'semantic-ui-react'
import Login from './components/Login'
import Blogs from './components/Blogs'
import Users from './components/Users'
import User from './components/User'
import Blog from './components/Blog'
import NewBlog from './components/NewBlog'

const App = () => {
  const [active, setActive] = useState('/')
  const [visible, setVisible] = useState(false)

  return(
  
      <Router>
        <Menu>
          <Menu.Item
          active ={active === '/'}
          onClick = {()=>setActive('/')}
          as={Link}
          to='/'
          >
            Blogs
            {/* <Link to="/" >Blogs</Link> */}
          </Menu.Item>
          <Menu.Item
          active ={active === '/users'}
          onClick = {()=>setActive('/users')}
          as={Link}
          to='/users'
          >
            Users
          {/* <Link to="/users">Users</Link> */}
          </Menu.Item>
          <Login />
        </Menu>
          <Route exact path="/" render={() =><>{visible?<div style={{textAlign:'center'}}><NewBlog/><Button secondary onClick={()=>setVisible(!visible)}>Cancel</Button></div>:<div style={{textAlign:'center'}}><Button primary onClick={()=>setVisible(!visible)} >New Blog</Button></div>}<Blogs/></>} />
          <Route exact path="/users" render={() =><Users/>} />
          <Route exact path="/users/:id" render={({ match }) =>
      <User id={match.params.id} />
          } />
          <Route exact path="/blogs/:id" render={({ match }) =>
      <Blog id={match.params.id} />
          } />
        
      </Router>
      
    
)
  }

export default App