const blogs = [
  {
    id: '5a451df7571c224a31b5c8ce',
    title: 'HTML is easy',
    author: 'asda',
    likes: 5,
    user: {
      _id: '5a437a9e514ab7f168ddf138',
      username: 'mluukkai',
      name: 'Matti Luukkainen'
    }
  },
  {
    id: '5a451e21e0b8b04a45638211',
    title: 'Browser can execute only javascript',
    author: 'asdasd',
    likes: '10',
    user: {
      _id: '5a437a9e514ab7f168ddf138',
      username: 'mluukkai',
      name: 'Matti Luukkainen'
    }
  },
  {
    id: '5a451e30b5ffd44a58fa79ab',
    title: 'The most important methods of HTTP are GET and POST',
    author:'asda',
    likes: '2019-06-11T16:39:12.713Z',
    user: {
      _id: '5a437a9e514ab7f168ddf138',
      username: 'mluukkai',
      name: 'Matti Luukkainen'
    }
  }
]
  
const getAll = () => {
  return Promise.resolve(blogs)
}

const getBlog = (id) => {
    return {user:1}
}
  
export default { getAll, getBlog }