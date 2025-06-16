import { useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  useEffect(()=>{
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => setCountries(response.data.map(({name, capital, area, languages, flags}) => ({
        name, capital, area, languages, flags
      }))))
  },[])
  //console.log(countries);
  
  const handleChange = (event) =>{
    setSearch(event.target.value)
  }
  const filteredCountries = countries.filter(country => 
    country.name.common.toLowerCase().includes(search.toLowerCase()))


  return (
   <div>
    find countries <input value={search} onChange={handleChange}/>
     {filteredCountries.length > 10 ? (
  <p>Too many matches, specify another filter</p>
) : filteredCountries.length === 1 ? (
  <div>
    <h1>{filteredCountries[0].name.common}</h1>
    <p>Capital: {filteredCountries[0].capital}</p>
    <p>Area: {filteredCountries[0].area}</p>
    
    <h1>Languages:</h1>
    <ul>
      {Object.values(filteredCountries[0].languages).map(language => (
        <li key={language}>{language}</li>
      ))}
    </ul>

    <img src={filteredCountries[0].flags.png} alt="flag" width="150" />
  </div>
) : (
  filteredCountries.map(country => (
    <p key={country.name.common}>{country.name.common}</p>
  ))
)}

   </div>
     
     
  )
}

export default App
