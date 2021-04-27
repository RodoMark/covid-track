import React from 'react'
import CountUp from 'react-countup'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css';

const Cards = (props) => {

  const {
    confirmed,
    recovered,
    deaths,
    lastUpdate,
  } = props.data

  if(!confirmed) {
    return 'Loading...';
  } 

  return (
  <div class={styles.container}>
    <Grid container spacing={3} justify='center'>
      <Grid item component={Card}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>Infected</Typography>
          <Typography variant="h5" gutterBottom>
            <CountUp
              start={0}
              end={confirmed.value}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="body2">Number of active cases of COVID-19</Typography>
        </CardContent>
      </Grid>
      <Grid item component={Card}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>Recovered</Typography>
          <Typography variant="h5" gutterBottom>
          <CountUp
              start={0}
              end={recovered.value}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="body2">Number of recoveries from COVID-19</Typography>
        </CardContent>
      </Grid>
      <Grid item component={Card}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>Deaths</Typography>
          <Typography variant="h5" gutterBottom>
            <CountUp
              start={0}
              end={deaths.value}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="body2">Number of deaths due to COVID-19</Typography>
        </CardContent>
      </Grid>
    </Grid>
  </div>
  )
}

export default Cards