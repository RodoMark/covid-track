import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchDailyData } from '../../api';


import styles from './Chart.module.css';

const Chart = () => {
  const [dailyData, setDailyData] = useState(["DAILY DATA"])

  useEffect(() => {
    async function fetchAPI() {
      try {
        const response = await fetchDailyData();
        console.log("RESPONE INSIDE EFFECT", response)
        setDailyData(response);
      } catch(error) {
        console.log(error)
      }
    }

    fetchAPI()
  }, [])

  const lineChart = (
    dailyData.length ?
    <Line 
      data= {
        {
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            data: dailyData.map(( { confirmed }) => confirmed),
            label: 'Infected',
            borderColor: '#458B00',
            fill: true,
          }, {
            data: dailyData.map(( { recovered }) => recovered),
            label: 'Recovered',
            borderColor: 'rgba(0,0,255, 0.5)',
            backgroundColor: 'rgba(0,0,255, 0.5)',
            fill: true,
          }, {
            data: dailyData.map(( { deaths }) => deaths),
            label: 'Deaths',
            borderColor: '#C0C0C0',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          }],
      }
    }
    /> : null
  );

  

  return (
  <div className={styles.container}>
    <h1></h1>
  </div>
  )
}

export default Chart