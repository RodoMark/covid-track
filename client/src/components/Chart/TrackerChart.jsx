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
        <Line type="monotone" dataKey="Confirmed" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Recovered" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Deaths" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default TrackerChart