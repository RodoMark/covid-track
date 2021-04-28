import axios from 'axios'

const url = 'https://api.covid19api.com/summary';


export const fetchGlobalData = async (country = 'Canada') => {
  let countryName = country.toLowerCase();
  
  let changeableURL = `https://api.covid19api.com/live/country/${countryName}`;

  try {
    const { data } = await axios.get(url)

    const modifiedData = {
      TotalConfirmed: data.Global.TotalConfirmed,
      TotalRecovered: data.Global.TotalRecovered,
      TotalDeaths: data.Global.TotalDeaths,
      CurrentDate: data.Global.Date,
    } 

    return modifiedData;
  } catch (error) {
    console.log("ERROR:", error)
  }
}

export const fetchData = async (country = 'Canada') => {
  let countryName = country.toLowerCase();
  
  let changeableURL = `https://api.covid19api.com/live/country/${countryName}`;

  try {
    const { data } = await axios.get(url)

    const modifiedData = {
      TotalConfirmed: data.Global.TotalConfirmed,
      TotalRecovered: data.Global.TotalRecovered,
      TotalDeaths: data.Global.TotalDeaths,
      CurrentDate: data.Global.Date,
    } 

    return modifiedData;
  } catch (error) {
    console.log("ERROR:", error)
  }
}

export const fetchDailyData = async () => {
  try {
     const { data } = await axios.get('https://api.covid19api.com/total/dayone/country/canada')

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
    const { data } = await axios.get(`https://api.covid19api.com/countries`)

    const countries = data.map(countryObj => countryObj.Country)
    return countries

  } catch(error) {
    console.log(error)
  }
}