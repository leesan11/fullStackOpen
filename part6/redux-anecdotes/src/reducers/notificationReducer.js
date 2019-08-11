export const notify = (content) =>{
    return {
        type: 'SHOW',
        content: `you voted for ${content}`
    }
}

export const closeNotify = () => {
  return {
    type: 'HIDE',
    content: ''
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