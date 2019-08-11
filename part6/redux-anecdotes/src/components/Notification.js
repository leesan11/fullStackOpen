import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  
  let style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  console.log(props.notification)
  
  return props.notification.content?<div style={style}>{props.notification.content}</div>:''
}

const mapStateToProps = (state) =>{
  return {
    notification: state.notification
  }
}



const connectedNotification = connect(mapStateToProps)(Notification)

export default connectedNotification