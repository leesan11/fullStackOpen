import React from 'react'
import {useState} from 'react'
import blogService from '../services/blogs'

const AddBlog = ({setAlert}) => {

    const [addBlog, setAddBlog] = useState({})

    const handleSubmit=async (e) =>{
        e.preventDefault()
        try{
            await blogService.addBlog(addBlog)
            setAlert("Blog Added")
            setTimeout(()=>{
                setAlert("")
            },3000)
        }catch(error){
            console.log(error)
            setAlert(`Unable to add. Missing Fields`)
            setTimeout(()=>{
                setAlert("")
            },3000)
        }
    }
    const onChangeProp = (type, e) => {
        let newBlog = addBlog
        newBlog[type] = e.target.value
        setAddBlog(newBlog)
    }


    return (
        <form>
            <label>Title</label>
            <input type="text" onChange={(e)=>onChangeProp("title",e)}/>
            <br/>
            <label>Author</label>
            <input type="text" onChange={(e)=>onChangeProp("author",e)}/>
            <br/>
            <label>Url</label>
            <input type="text" onChange={(e)=>onChangeProp("url",e)}/>
            <br/>
            <button type="submit" onClick={(e)=>handleSubmit(e)}>Add Blog</button>
        </form>
    )

}

export default AddBlog