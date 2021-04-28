import axios from 'axios'

const url = 'https://api.covid19api.com/summary';

export const fetchData = async () => {
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
       confirmed: dailyData.Confirmed,
       recovered: dailyData.Recovered,
       deaths: dailyData.Deaths,
       date: dailyData.Date,
     })
    )

    return modifiedData;
  } catch(error) {
    console.log(error)
  } 
}
