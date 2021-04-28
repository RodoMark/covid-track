import axios from 'axios'

const url = 'https://api.covid19api.com/summary';

export const fetchData = async () => {
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate, } } = await axios.get(url)
    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    } 
    return modifiedData;
  } catch (error) {
    console.log("ERROR:", error)
  }
}

export const fetchDailyData = async () => {
  try {
     const { data } = await axios.get('https://api.covid19api.com/')

     console.log("DATA FROM NEW API", data)
     debugger
     const modifiedData = data.map((dailyData) => ({
       confirmed: dailyData.confirmed.total,
       deaths: dailyData.deaths.total,
       date: dailyData.reportDate,
     })
    )

    return modifiedData;
  } catch(error) {
    console.log(error)
  } 
}
