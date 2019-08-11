import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (obj) => {
    const response = await axios.post(baseUrl, obj)
    return response.data
}

const incrVote = async (obj) => {
    const response = await axios.put(baseUrl+`/${obj.id}`, obj)
    return response.data
}
export default { getAll, createNew, incrVote }