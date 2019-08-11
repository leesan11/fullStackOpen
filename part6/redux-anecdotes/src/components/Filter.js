import React from 'react'
import { connect } from 'react-redux'
import {filterSearch} from '../reducers/filterReducer'

const Filter = (props) => {
    return (
        <>Filter <input type='text' name='filter' onChange={(e)=> props.filterSearch(e.target.value)}/></>
    )
}

const mapStateToProps = (state) => {
    return{
        filter: state.filter
    }
}
const mapDispatchToProps = {
    filterSearch
}

const connectedFilter = connect(mapStateToProps, mapDispatchToProps)(Filter)

export default connectedFilter