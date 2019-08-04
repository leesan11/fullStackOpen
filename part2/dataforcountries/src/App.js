import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {

  const [ newSearch, setNewSearch ] = useState('')
  const [ newResult, setNewResult ] = useState([])

  useEffect(()=>{
    axios.get("https://restcountries.eu/rest/v2/all")
      .then((response)=>{
        let countries = response.data
        let result = countries.filter((country)=>{
          return ((country.name).toLowerCase()).indexOf(newSearch) !==-1
        })
        if(result.length < 10){
          setNewResult(result)
        }else{
          setNewResult([])
        }
      })
  },[newSearch])

  const renderResult = () =>{
    let countryList = "Too many matches or no matches, specify another filter"
    if (newResult.length > 1){
      countryList = newResult.map((result)=>{
      return(<li key={result.name}>{result.name}</li>)
    })
  }else if ( newResult.length === 1 ){
    let tempObj = {
      name:newResult[0].name,
      flag:newResult[0].flag,
      capital:newResult[0].capital,
      languages:(newResult[0].languages.map(lang=><li key={lang.name}>{lang.name}</li>)),
      population:newResult[0].population
    }
    countryList = (
      <div>
        <h3>{tempObj.name}</h3>
        <p>Capital: {tempObj.capital}</p>
        <p>Population: {tempObj.population}</p>
        <h6>Languages Spoken</h6>
        {tempObj.languages}
        <img src={tempObj.flag} alt="flag"/>
      </div>
    )
    
  }
    return countryList
  }

  const handleNewSearch = (event) => {
    setNewSearch(event.target.value)
  }

  return(
  <div>
    find Countries <input onChange={handleNewSearch}/>
    <br/>
    {renderResult()}
  </div>
  )
}

export default App;
