const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blogs')
const helper = require('./test_helper')

beforeEach(async () => {
    await Blog.deleteMany({})
    await Promise.all(helper.initialBlogs.map(blog =>new Blog(blog))
    .map(async blog=>await blog.save()))
})

test("blogs are returned as json",async () => {
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
    blogs.forEach(blog=>{
        expect(blog.id).toBeDefined()
    })
})

test("check likes property missing", async () => {
    const newBlog = {
        title:"tested and true",
        author:"John Smith",
        url:"www.google.ca"
    }
    await api
    .post("/api/blogs")
    .send(newBlog).expect(200)
    .expect('Content-Type', /application\/json/)

    const blogs = await helper.blogsInDb()
    expect(blogs.length).toBe(helper.initialBlogs.length +1)
    expect(blogs.find(blog=>blog.title===newBlog.title).likes).toBe(0)
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
        title:"tested and true",
        author:"John Smith",
        url:"www.google.ca",
        likes:7
    }
    await api
    .post("/api/blogs")
    .send(newBlog).expect(200)
    .expect('Content-Type', /application\/json/)

    const blogs = await helper.blogsInDb()
    expect(blogs.length).toBe(helper.initialBlogs.length +1)

    const titles = blogs.map(blog=>blog.title)
    expect(titles).toContain('tested and true')

})


afterAll(()=>{
    mongoose.connection.close()
})