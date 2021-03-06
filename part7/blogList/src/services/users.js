import axios from 'axios'
// const baseUrl = 'http://localhost:3003/api'
const baseUrl = '/api'

const login = async (obj) => {
    const response = await axios.post(baseUrl + '/login', obj)
    return response.data
}

const getUsers = async () => {
    const response = await axios.get(baseUrl + '/users')
    console.log(response.data)
    return response.data
}

export default { login , getUsers }