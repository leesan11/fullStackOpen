export const filterSearch = (value) => {
    return {
        type:'FILTER',
        content:value
    }
}

const filterReducer = (state = {content:''}, action) => {
    console.log('state now: ', state)
    console.log('action', action)
    // eslint-disable-next-line default-case
    switch(action.type){
      case 'FILTER':
        state = action.content
        return state
      
    }
    return state
  }
  
  export default filterReducer