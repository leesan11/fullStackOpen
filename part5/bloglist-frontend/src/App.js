import React from 'react';
import {useState, useEffect} from 'react'
import blogService from './services/blogs'
import Blog from './components/Blog'
import Login from './components/Login'
import Alert from './components/Alert'

function App() {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [alert, setAlert] = useState('')
  const cred = {setUsername, setPassword, password, username, loggedIn, setLoggedIn, setAlert}
  useEffect(() => {
    const fetchData = async () => {
      const allBlogs = await blogService.getAll()
      setBlogs(allBlogs)
    }
    fetchData()
  },[])

  return (<>
    <Alert alert={alert}/>
    {loggedIn?<h3>{username} is logged in</h3>:""}
    <Login cred={cred}/>
    {loggedIn?blogs.map(blog=><Blog blog={blog}/>):""}
    </>
  );
}

export default App;
