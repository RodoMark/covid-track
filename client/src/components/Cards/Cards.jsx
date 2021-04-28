import React from 'react'
import CountUp from 'react-countup'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css';
import cx from 'classnames';

const Cards = (props) => {

  const {
    TotalConfirmed,
    TotalRecovered,
    TotalDeaths,
    CurrentDate,
  } = props.data

  if(!TotalConfirmed) {
    return 'Loading...';
  } 

  return (
  <div class={styles.container}>
    <Grid container spacing={3} justify='center'>
      <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>Infected</Typography>
          <Typography variant="h5" gutterBottom>
            <CountUp
              start={0}
              end={TotalConfirmed}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">{new Date(CurrentDate).toDateString()}</Typography>
          <Typography variant="body2">Number of active cases of COVID-19</Typography>
        </CardContent>
      </Grid>
      <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.TotalRecovered)}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>Recovered</Typography>
          <Typography variant="h5" gutterBottom>
          <CountUp
              start={0}
              end={TotalRecovered}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">{new Date(CurrentDate).toDateString()}</Typography>
          <Typography variant="body2">Number of recoveries from COVID-19</Typography>
        </CardContent>
      </Grid>
      <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.TotalDeaths)}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>Deaths</Typography>
          <Typography variant="h5" gutterBottom>
            <CountUp
              start={0}
              end={TotalDeaths}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">{new Date(CurrentDate).toDateString()}</Typography>
          <Typography variant="body2">Number of TotalDeaths due to COVID-19</Typography>
        </CardContent>
      </Grid>
    </Grid>
  </div>
  )
}

export default Cards