import React, { useState, useEffect } from 'react'
import { countries } from '../../api'
import { allCountries } from '../../api/countries'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';


import styles from './CountryPicker.module.css'

const CountryPicker = ({ handleCountryChange }) => {

  const parsedCountries = allCountries
    .sort()
    .map((country, index) => {
    return(
      <ListItem 
        button 
        key={index} 
        value={country.name}
        onClick={() => handleCountryChange(country.name)}
      >
        <ListItemText primary={country.name} />
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
        {allCountries.length ? parsedCountries : <h3>Loading...</h3>}
      </List>
    </section>
  )
}

export default CountryPicker