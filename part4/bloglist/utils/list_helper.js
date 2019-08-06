const dummy = blogs => 1

const totalLikes = blogs => blogs.reduce((sum,current)=>sum + current.likes,0)
    
module.exports={dummy, totalLikes}