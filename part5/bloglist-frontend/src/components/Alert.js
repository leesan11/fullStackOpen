import React from 'react'
import PropTypes from 'prop-types'

const Alert= ({alert}) => {
    if (alert.message){
        let color = 'green'
        if(alert.error){
            color = 'red'
        }


    return (
        <div style={{color:`${color}`,border:`2px solid ${color}`,textAlign:"center"}}>
            <p>{alert.message}</p>
        </div>
    )
    }else{
        return (<></>)
    }
}

Alert.propTypes = {
    alert:PropTypes.object.isRequired
}
export default Alert