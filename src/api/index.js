import axios from 'axios'

import { allCountries } from './countries'

export const fetchGlobalData = async () => {
  try {
    const { data } = await axios.get('https://api.covid19api.com/summary')

    const modifiedData = {
      CountryName: 'Global',
      Confirmed: data.Global.TotalConfirmed,
      Recovered: data.Global.TotalRecovered,
      Deaths: data.Global.TotalDeaths,
      CurrentDate: data.Global.Date,
    } 

    return modifiedData;
  } catch (error) {
    console.log(error)
  }
}

export const fetchData = async (country = 'Canada') => {
  let countryName = country.toLowerCase();

  try {
    const { data } = await axios.get(`https://api.covid19api.com/total/country/${countryName}`)

    const mostRecent = data[data.length - 1]

    const modifiedData = {
      Confirmed: mostRecent.Confirmed,
      Recovered: mostRecent.Recovered,
      Deaths: mostRecent.Deaths,
      CurrentDate: mostRecent.Date,
    } 

    return modifiedData;
  } catch (error) {
    console.log(error)
  }
}

export const fetchGlobalDailyData = async () => {
  try {
     const response = await axios.get(`https://covid2019-api.herokuapp.com/v2/timeseries/global`)

     const { data } = response.data

     const modifiedData = data.map((dataObj) => {
      let currentDate = Object.keys(dataObj)

      return {
       Confirmed: dataObj[currentDate].confirmed,
       Recovered: dataObj[currentDate].recovered,
       Deaths: dataObj[currentDate].deaths,
       Date: dataObj[currentDate],
     }
    }
    )

    return modifiedData;
  } catch(error) {
    console.log(error)
  } 
}

export const fetchDailyData = async (country = 'Canada') => {
  let countryName = country.toLowerCase();

  try {
     const { data } = await axios.get(`https://api.covid19api.com/total/dayone/country/${countryName}`)

     const modifiedData = data.map((dailyData) => ({
       Confirmed: dailyData.Confirmed,
       Recovered: dailyData.Recovered,
       Deaths: dailyData.Deaths,
       Date: dailyData.Date,
     })
    )

    return modifiedData;
  } catch(error) {
    console.log(error)
  } 
}

export const countries = async () => {
  try {

    const countries = allCountries.map(countryObj => countryObj.name)
    return countries

  } catch(error) {
    console.log(error)
  }
}