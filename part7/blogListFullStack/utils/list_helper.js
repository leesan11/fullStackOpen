const dummy = blogs => 1

const totalLikes = blogs => blogs.reduce((sum, current) => sum + current.likes, 0)

const favoriteBlog = blogs => blogs.reduce((mostLikes, current) => current.likes > mostLikes.likes ? current : mostLikes, blogs[0])

const mostBlogs = blogs => {
    return blogs.reduce((allBlogs, current) => {
        if (allBlogs.find(ele => ele.author === current.author)) {
            return allBlogs.map(ele => (ele.author === current.author) ? { author: current.author, blogs: ele.blogs + 1 } : ele)
        } else {
            return [...allBlogs, {
                author: current.author,
                blogs: 1
            }]
        }
    }, [])
        .reduce((mostBlogs, current) => current.blogs > mostBlogs.blogs ? current : mostBlogs, { author: "null", blogs: 0 })

}

const mostLikes = blogs => {
    return blogs.reduce((allBlogs, current) => {
        if (allBlogs.find(ele => ele.author === current.author)) {
            return allBlogs.map(ele => (ele.author === current.author) ? { author: current.author, likes: current.likes + ele.likes } : ele)
        } else {
            return [...allBlogs, {
                author: current.author,
                likes: current.likes
            }]
        }
    }, [])
        .reduce((mostBlogs, current) => current.likes > mostBlogs.likes ? current : mostBlogs, { author: "null", likes: 0 })

}

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes }