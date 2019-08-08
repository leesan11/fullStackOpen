import axios from 'axios'
const baseUrl = '/api/login'

const login = async (obj) => {
    let response = await axios.post(baseUrl, obj)
    return response.data
}

export default {login}