import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchDailyData, fetchGlobalDailyData } from '../../api';

const TrackerChart = (props) => {
  const [dailyData, setDailyData] = useState([])

  const countryName = props.countryName

  useEffect(() => {
    const fetchAPI = async () => {
      if(countryName === "Global") {
        const data = await fetchGlobalDailyData()
        console.log("GLOBAL SIDE", dailyData)
        setDailyData(data)
        console.log("dailyData", dailyData)
      } else {
        const data = await fetchDailyData(countryName)
        setDailyData(data)
      }
         
    } 
    fetchAPI()
  }, [countryName])
  
  return (
    <div id="chart">
      <ResponsiveContainer width="100%" aspect={3}>
        
        <LineChart
          width={412}
          height={247}
          data={dailyData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="Confirmed" stroke="rgba(0,255,0, 0.5)"/>
        <Line type="monotone" dataKey="Recovered" stroke="rgba(0,0,255, 0.5)" />
        <Line type="monotone" dataKey="Deaths" stroke="rgba(110,0,0, 0.5)" />
      </LineChart>
    </ResponsiveContainer>
    <h3>{`COVID 19 CASES OVER TIME FOR ${countryName === 'Global' ? 'the Whole World' : countryName}`.toUpperCase()}</h3>
    </div>
  );
}

export default TrackerChart