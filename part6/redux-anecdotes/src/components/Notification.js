import React from 'react'

const Notification = ({store}) => {
  const {notification} = store.getState()
  let style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  
  if(!notification.visible){
    style = {...style, display:'none'}
    
  }else{
    style = {...style, display:'block'}
    setTimeout(()=>{
      store.dispatch({type:'HIDE'})
    },3000)
  }

  return <div style={style}>{notification.content}</div>
}

export default Notification