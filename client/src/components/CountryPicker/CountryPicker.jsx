import React, { useState, useEffect } from 'react'
import { countries } from '../../api'

import { NativeSelect, FormControl } from '@material-ui/core'

import styles from './CountryPicker.module.css'

const CountryPicker = () => {
  const [availableCountries, setAvailableCountries] = useState([])

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await countries()
      setAvailableCountries(data)
      console.log("AVAILABLE COUNTRIES", availableCountries)
    }

    fetchCountries()
  }, [setAvailableCountries])

  const parsedCountries = availableCountries.sort().map((country, index) => {
    return(
      <option key={index}>{country}</option>
    ) 
  })

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect>
        {availableCountries.length ? parsedCountries : <h3>Loading...</h3>}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker