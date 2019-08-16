import axios from 'axios'
// const baseUrl = 'http://localhost:3003/api/blogs'
const baseUrl = '/api/blogs'

const getAllBlogs = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getSpecificBlog = async (obj) => {
    const config = {
        headers: { Authorization:`bearer ${JSON.parse(localStorage.getItem('user')).token}` },
      }

    const response = await axios.get(baseUrl+`/${obj.id}`,config)
    return response.data
}

const changeLikes = async (obj) => {
    const config = {
        headers: { Authorization:`bearer ${JSON.parse(localStorage.getItem('user')).token}` },
      }
    
    const response = await axios.put(baseUrl+`/${obj.id}`,{likes: obj.likes}, config)
    return response.data
}

const addBlog = async (obj) => {
  const config = {
    headers: { Authorization:`bearer ${JSON.parse(localStorage.getItem('user')).token}` },
  }

  const response = await axios.post(baseUrl, obj, config)
  console.log(response.data)
  return response.data

}


export default { getAllBlogs, getSpecificBlog, changeLikes, addBlog }