const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blogs')
const User = require('../models/users')
const helper = require('./test_helper')

beforeEach(async () => {
    await Blog.deleteMany({})
    // get id of first user
    const users = await User.find({})
    const user = users[0]._id
    // ====
    await Promise.all(helper.initialBlogs.map(blog => new Blog({...blog, user}))
        .map(async blog => await blog.save()))
})

test("blogs are returned as json", async () => {
    await api
        .get("/api/blogs")
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test("there are 2 blogs", async () => {
    const response = await api.get("/api/blogs")
    expect(response.body.length).toBe(helper.initialBlogs.length)
})

test("check for id property", async () => {
    const blogs = await helper.blogsInDb()
    blogs.forEach(blog => {
        expect(blog.id).toBeDefined()
    })
})

test("check for deletion", async () => {
    const blogs = await helper.blogsInDb()
    const id = blogs[0].id
    const response = await api.delete(`/api/blogs/${id}`)
        .expect(204)
    const newBlogs = await helper.blogsInDb()

    expect(newBlogs.length).toEqual(blogs.length - 1)
})

test("check for like changes", async () => {
    const likes = { likes: 100 }
    const blogs = await helper.blogsInDb()
    const id = blogs[0].id
    const response = await api.put(`/api/blogs/${id}`).send(likes)
        .expect(200)
        .expect('Content-Type', /application\/json/)

    const newBlogs = await helper.blogsInDb()
    expect(newBlogs[0].likes).toBe(100)

})

test("bad request on post", async () => {
    const newBlog = {
        author: "John Smith",
        likes: 7
    }
    await api
        .post("/api/blogs")
        .send(newBlog).expect(400)
        .expect('Content-Type', /application\/json/)

})

test("check likes property missing", async () => {
    const newBlog = {
        title: "tested and true",
        author: "John Smith",
        url: "www.google.ca"
    }
    await api
        .post("/api/blogs")
        .send(newBlog).expect(200)
        .expect('Content-Type', /application\/json/)

    const blogs = await helper.blogsInDb()
    expect(blogs.length).toBe(helper.initialBlogs.length + 1)
    expect(blogs.find(blog => blog.title === newBlog.title).likes).toBe(0)
})

test("obtain blog by id", async () => {
    const blogs = await helper.blogsInDb()
    const id = blogs[0].id
    const response = await api.get(`/api/blogs/${id}`)
        .expect(200)

    expect(response.body).toEqual(blogs[0])

})

test("new blog can be added", async () => {
    const newBlog = {
        title: "tested and true",
        author: "John Smith",
        url: "www.google.ca",
        likes: 7
    }
    await api
        .post("/api/blogs")
        .send(newBlog).expect(200)
        .expect('Content-Type', /application\/json/)

    const blogs = await helper.blogsInDb()
    expect(blogs.length).toBe(helper.initialBlogs.length + 1)

    const titles = blogs.map(blog => blog.title)
    expect(titles).toContain('tested and true')
})

describe("for users model", () => {
    beforeEach(async () => {
        await User.deleteMany({})
        const user = new User({
            username: "leesan",
            name: "John",
            password: "Sangmoo0"
        })
    })

    test("creation of new user", async () => {
        const usersAtStart = await helper.usersInDb()

        const newUser = {
            username: "test",
            name: "test",
            password: "test"
        }

        await api.post("/api/users")
            .send(newUser)
            .expect(200)
            .expect('Content-Type', /application\/json/)

        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd.length).toBe(usersAtStart.length+1)

        const usernames = usersAtEnd.map(user=>user.username)
        expect(usernames).toContain(newUser.username)

    })

    test("no username", async () => {
        const newUser = {
            username: "",
            name: "test2",
            password: "test2"
        }

        await api.post("/api/users")
            .send(newUser)
            .expect(400)
    })

    test("password length <= 3", async () => {
        const newUser = {
            username: "test3",
            name: "test3",
            password: "tes"
        }

        await api.post("/api/users")
            .send(newUser)
            .expect(400)
    })
})


afterAll(() => {
    mongoose.connection.close()
})