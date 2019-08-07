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
  const [user, setUser] = useState({})
  const [alert, setAlert] = useState('')
  const cred = {setUsername, setPassword, password, username, loggedIn, setLoggedIn, setAlert, setUser}
  useEffect(() => {
    const fetchData = async () => {
      const allBlogs = await blogService.getAll()
      setBlogs(allBlogs)
    }
    fetchData()
  },[])

  useEffect(()=>{
    // check for token
    const currentUser = localStorage.getItem("loggedBlogUser")
    if(currentUser){
      setLoggedIn(true)
      setUser(JSON.parse(currentUser))
    }
  },[])

  const handleLogout = () => {
    setLoggedIn(false)
    localStorage.clear()
    setAlert("Logged Out")
    setTimeout(()=>{
      setAlert('')
    },3000)
    setUser({})
  }


  return (<>
    <Alert alert={alert}/>
    {loggedIn?<><h3>{user.username} is logged in</h3><button onClick={handleLogout}>Logout</button></>:<Login cred={cred}/>}
    {loggedIn?blogs.map(blog=><Blog blog={blog}/>):""}
    </>
  );
}

export default App;
