import React from 'react'

const Message = ({newMessage}) => {
    const style= {
        border:"2px solid red",
        color:"red",
        textAlign:"center",
        padding:"10px"
    }

return (
    <div style={style}>
        <h3>{newMessage}</h3>
    </div>
)
}

export default Message