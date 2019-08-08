import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/blogs'

let tokenHeader = null

const setToken = newToken => {
  tokenHeader = {headers:{Authorization:`bearer ${newToken}`}}
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const addBlog = async (obj) => {
  const response = await axios.post(baseUrl, obj, tokenHeader)
  return response.data
}

const updateBlog = async (obj) => {
  const response = await axios.put(baseUrl+`/${obj.id}`, obj, tokenHeader)
  return response.data
}

const deleteBlog = async (obj) => {
  const response = await axios.delete(baseUrl+`/${obj.id}`,tokenHeader)
  return response.data
}

const getBlog = async (obj) => {
  const response = await axios.get(baseUrl+`/${obj.id}`,tokenHeader)
  return response.data
}

export default { getAll, addBlog, setToken, updateBlog,deleteBlog, getBlog }