import React from 'react'
const Blog = ({ blog }) => (
  <div>
    Title: {blog.title} Author: {blog.author} Url: {blog.url}
  </div>
)

export default Blog