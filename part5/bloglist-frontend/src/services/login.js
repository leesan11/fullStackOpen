import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/login'

const login = async (obj) => {
    let response = await axios.post(baseUrl, obj)
    return response.data
}

export default {login}