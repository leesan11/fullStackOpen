import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {

  const [ newSearch, setNewSearch ] = useState('')
  const [ newResult, setNewResult ] = useState([])
  const [ newShow, setNewShow ] = useState([])
  
  useEffect(()=>{
    async function fetchData(){
        let response = await axios.get("https://restcountries.eu/rest/v2/all")
        let countries = response.data
        let result = countries.filter((country)=>{
          return ((country.name).toLowerCase()).indexOf(newSearch) !==-1
        })
        if(result.length < 10){
          async function fetchWeather(){
            return Promise.all(result.map(async (country)=>{
            let response = await axios.get(`https://api.apixu.com/v1/current.json?key=a16309679682437b82612341190408&q=${country.name}`)
            let weather = response.data
            return {
              name:country.name,
              capital:country.capital,
              population:country.population,
              languages:country.languages,
              flag:country.flag,
              image:weather.current.condition.icon,
              temp:weather.current.temp_c,
              wind:weather.current.wind_kph,
              direction:weather.current.wind_dir
            }
          }))
        }
          setNewResult(await fetchWeather())
        }else{
          await setNewResult([])
        } 
      }
      fetchData()
  },[newSearch])


  const handleShow = (result) => {
    if (newShow.indexOf(result) === -1){
    setNewShow([...newShow, result])
  }else{
    let filtered = newShow.filter(show=>{
      return show !== result
    })
    setNewShow(filtered)
  }
  }

  const showData = (name) => {
    let country = newShow.filter(show=>{
      return show.name === name
    })
    if(country.length === 1){
    return (
      <div>
        <h3>{country[0].name}</h3>
        <p>Capital: {country[0].capital}</p>
        <p>Population: {country[0].population}</p>
        <h6>Languages Spoken</h6>
        {(country[0].languages.map(lang=><li key={lang.name}>{lang.name}</li>))}
        <img src={country[0].flag} alt="flag"/>
        <p>{country[0].temp} degrees Celsius</p>
        <img src={country[0].image} alt="weather"/>
        <p>{country[0].wind} kph {country[0].direction} direction</p>
        </div>
    )
    }else{
      return []
    }
  }

  const renderResult = () =>{
    let countryList = "Too many matches or no matches, specify another filter"
    if (newResult.length > 0){
      console.log(newResult)
      countryList = newResult.map((result)=>{
        
      return(<div key={result.name}>
        {result.name}<button key={`${result.name}-b`} onClick={()=>handleShow(result)}>show</button>
        <div data-show={result.name}>
          {showData(result.name)}
        </div>
        </div>)
    })
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
