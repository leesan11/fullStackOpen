export const setNotification = (content, time) => {
  return async dispatch => {
    dispatch({
      type:'SHOW',
      content: content
    })
    await setTimeout(()=>{
      dispatch({
        type:'HIDE',
        content: ''
      })
    },time*1000)
  }
}

const notificationReducer = (state = {content:'',visible:false}, action) => {
    console.log('state now: ', state)
    console.log('action', action)
    // eslint-disable-next-line default-case
    switch(action.type){
      case 'SHOW':
        state = {content:action.content, visible:true}
        return state
      case 'HIDE':
        state = {content:'', visible:false}
        return state
    }
    return state
  }
  
  export default notificationReducer