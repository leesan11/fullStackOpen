import axios from 'axios'

const baseURL = "/persons"

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

const addNumber = newObject => {
    const request = axios.post(baseURL, newObject)
    return request.then(response=>response.data)
}

const delNumber = id => {
    const request = axios.delete(baseURL + `/${id}`)
    return request.then(response=>response.data)
}

const putNumber = (id, obj) => {
    const request = axios.put(baseURL + `/${id}`, obj)
    return request.then(response=>response.data)
}

export default {getAll, addNumber, delNumber, putNumber}
