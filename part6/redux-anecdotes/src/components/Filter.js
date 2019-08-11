import React from 'react'
import {filterSearch} from '../reducers/filterReducer'

const Filter = ({store}) => {
    return (
        <>Filter <input type='text' name='filter' onChange={(e)=> store.dispatch(filterSearch(e.target.value))}/></>
    )
}

export default Filter