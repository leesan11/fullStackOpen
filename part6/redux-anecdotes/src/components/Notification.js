import React from 'react'
import { closeNotify } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const Notification = (props) => {
  
  let style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  
  if(!props.notification.visible){
    style = {...style, display:'none'}
  }else{
    style = {...style, display:'block'}
    setTimeout(()=>{
      props.closeNotify()
    },3000)
  }

  return <div style={style}>{props.notification.content}</div>
}

const mapStateToProps = (state) =>{
  return {
    notification: state.notification
  }
}

const mapDispatchToProps = {
  closeNotify
}

const connectedNotification = connect(mapStateToProps, mapDispatchToProps)(Notification)

export default connectedNotification