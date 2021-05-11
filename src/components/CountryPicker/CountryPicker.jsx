import React, { useState, useEffect } from 'react'
import { countries } from '../../api'
import { allCountries } from '../../api/countries'

<<<<<<< HEAD:client/src/components/CountryPicker/CountryPicker.jsx
import { NativeSelect, FormControl } from '@material-ui/core'
=======
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

>>>>>>> e251acf... move everything out of client:src/components/CountryPicker/CountryPicker.jsx

import styles from './CountryPicker.module.css'

const CountryPicker = ({ handleCountryChange }) => {

  const parsedCountries = allCountries
    .sort()
    .map((country, index) => {
    return(
<<<<<<< HEAD:client/src/components/CountryPicker/CountryPicker.jsx
      <option key={index} value={country}>{country}</option>
=======
      <ListItem 
        button 
        key={index} 
        value={country.name}
        onClick={() => handleCountryChange(country.name)}
      >
        <ListItemText primary={country.name} />
      </ListItem>
>>>>>>> e251acf... move everything out of client:src/components/CountryPicker/CountryPicker.jsx
    ) 
  })

  return (
<<<<<<< HEAD:client/src/components/CountryPicker/CountryPicker.jsx
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue='' onChange={(e)=> handleCountryChange(e.target.value) }>
        <option value="Global">Global</option>
        {availableCountries.length ? parsedCountries : <h3>Loading...</h3>}
      </NativeSelect>
    </FormControl>
=======
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
>>>>>>> e251acf... move everything out of client:src/components/CountryPicker/CountryPicker.jsx
  )
}

export default CountryPicker