import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/comments'

const getSpecificComments = async (obj) => {
    // const config = {
    //     headers: { Authorization:`bearer ${JSON.parse(localStorage.getItem('user')).token}` },
    //   }

    const response = await axios.get(baseUrl+`/${obj.blog_id}`)
    return response.data
}

const addComment = async (obj) => {
    // const config = {
    //     headers: { Authorization:`bearer ${JSON.parse(localStorage.getItem('user')).token}` },
    //   }
    
    const response = await axios.post(baseUrl+`/${obj.blog_id}`,{comment: obj.comment})
    return response.data
}

export default { getSpecificComments, addComment }