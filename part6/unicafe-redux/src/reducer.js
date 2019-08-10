/* eslint-disable default-case */
const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }
  
  const counterReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
      case 'GOOD':
        let { good, ...restG } = state
        good++
        return { ...state, good: good }
      case 'OK':
        let { ok, ...restO } = state
        ok++
        return {...state, ok: ok}
      case 'BAD':
        let { bad, ...restB } = state
        bad++
        return {...state, bad: bad}
      case 'ZERO':
        return initialState
    }
    return state
  }
  
  export default counterReducer