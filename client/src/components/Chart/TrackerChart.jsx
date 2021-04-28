import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchDailyData } from '../../api';

const TrackerChart = () => {
  const [dailyData, setDailyData] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchDailyData()
      setDailyData(data)
    } 

    fetchAPI()
  }, [])
  
  return (
    <div id="chart">
    <h3>COVID 19 CASES OVER TIME</h3>
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart
        width={500}
        height={300}
        data={dailyData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Confirmed" fill="rgba(0,255,0, 0.5)" stroke="rgba(0,255,0, 0.5)"/>
        <Line type="monotone" dataKey="Recovered" fill="rgba(0,0,255, 0.5)" stroke="rgba(0,0,255, 0.5)" />
        <Line type="monotone" dataKey="Deaths" fill="rgba(110,0,0, 0.5)" stroke="rgba(110,0,0, 0.5)" />
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
}

export default TrackerChart