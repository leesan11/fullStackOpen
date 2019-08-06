const dummy = blogs => 1

const totalLikes = blogs => blogs.reduce((sum,current)=>sum + current.likes,0)

const favoriteBlog = blogs => blogs.reduce((mostLikes,current)=>current.likes > mostLikes.likes ? current: mostLikes, blogs[0])
    
module.exports={dummy, totalLikes, favoriteBlog}