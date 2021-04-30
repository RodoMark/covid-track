import React, { useState, useEffect } from 'react'
import { countries } from '../../api'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



const CountryPicker = ({ handleCountryChange }) => {
  const [availableCountries, setAvailableCountries] = useState([])

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await countries()
      setAvailableCountries(data)
    }

    fetchCountries()
  }, [setAvailableCountries])

  const parsedCountries = availableCountries
    .sort()
    .map((country, index) => {
    return(
      <ListItem 
        button 
        key={index} 
        value={country}
        onClick={() => handleCountryChange(country)}
      >
        <ListItemText primary={country} />
      </ListItem>
    ) 
  })

  return (
    <section className="list">
      <List 
        component="nav" 
        aria-label="available countries">
        <ListItem 
          button 
          onClick={() => handleCountryChange("Global")}
        >
          <ListItemText primary="Global" />
        </ListItem>
        {availableCountries.length ? parsedCountries : <h3>Loading...</h3>}
      </List>
    </section>
  )
}

export default CountryPicker