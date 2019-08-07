import React from 'react'

const Alert= ({alert}) => {
    if (alert){
    return (
        <div style={{color:"red",border:"2px solid red",textAlign:"center"}}>
            <p>{alert}</p>
        </div>
    )
    }else{
        return (<></>)
    }
}
export default Alert