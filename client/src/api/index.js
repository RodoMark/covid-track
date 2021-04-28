import axios from 'axios'

const url = 'https://api.covid19api.com/summary';

export const fetchData = async () => {
  try {
    const { data } = await axios.get(url)
    console.log("NEW API DATA:", data)

    const modifiedData = {
      TotalConfirmed: data.Global.TotalConfirmed,
      TotalRecovered: data.Global.TotalRecovered,
      TotalDeaths: data.Global.TotalDeaths,
      CurrentDate: data.Global.Date,
    } 

    console.log(modifiedData)
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
       TotalConfirmed: dailyData.TotalConfirmed.total,
       TotalDeaths: dailyData.TotalDeaths.total,
       date: dailyData.reportDate,
     })
    )

    return modifiedData;
  } catch(error) {
    console.log(error)
  } 
}
