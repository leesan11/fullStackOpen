import React from 'react';
import {useState, useEffect} from 'react'
import blogService from './services/blogs'
import Blog from './components/Blog'
import Login from './components/Login'
import Alert from './components/Alert'
import AddBlog from './components/AddBlog'

function App() {
  const [blogs, setBlogs] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const [alert, setAlert] = useState({})
  const cred = {loggedIn, setLoggedIn, setAlert, setUser}
  useEffect(() => {
    const fetchData = async () => {
      const allBlogs = await blogService.getAll()
      setBlogs(allBlogs)
    }
    fetchData()
  },[alert])

  useEffect(()=>{
    // check for token
    const currentUser = localStorage.getItem("loggedBlogUser")
    if(currentUser){
      const currentUserParsed = JSON.parse(currentUser)
      setLoggedIn(true)
      blogService.setToken(currentUserParsed.token)
      setUser(currentUserParsed)
    }
  },[])

  const handleLogout = () => {
    setLoggedIn(false)
    localStorage.clear()
    setAlert({message:"Logged Out", error:false})
    setTimeout(()=>{
      setAlert({message:"", error:false})
    },3000)
    setUser({})
  }


  return (<>
    <Alert alert={alert}/>
    {loggedIn?<><h3>{user.username} is logged in</h3><button onClick={handleLogout}>Logout</button><hr/><AddBlog setAlert={setAlert}/></>:<Login cred={cred}/>}
    {loggedIn?blogs.sort((b,a)=>a.likes-b.likes).map((blog=><Blog key={blog.id} setAlert={setAlert} blog={blog}/>)):""}
    </>
  );
}

export default App;
