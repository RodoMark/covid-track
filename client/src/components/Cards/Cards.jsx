import React from 'react'
import CountUp from 'react-countup'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import cx from 'classnames';

const Cards = (props) => {
  const data = props.data || {}

  const {
    Confirmed,
    Recovered,
    Deaths,
    CurrentDate,
  } = data

  const countryName = props.countryName

  if(!Confirmed) {
    return 'Loading...';
  } 

  return (
  <div class="container cards">
    <h1>{`Current Statistics for ${countryName === 'Global' ? 'the Whole World' : countryName}`}</h1>
    <Grid container spacing={3} justify='center'>
      <Grid item component={Card} xs={12} md={3} className="card card--infected">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>Infected</Typography>
          <Typography variant="h5" gutterBottom>
            <CountUp
              start={0}
              end={Confirmed}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">{new Date(CurrentDate).toDateString()}</Typography>
          <Typography variant="body2">Number of active cases of COVID-19</Typography>
        </CardContent>
      </Grid>
      <Grid item component={Card} xs={12} md={3} className="card card--recovered">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>Recovered</Typography>
          <Typography variant="h5" gutterBottom>
          <CountUp
              start={0}
              end={Recovered}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">{new Date(CurrentDate).toDateString()}</Typography>
          <Typography variant="body2">Number of recoveries from COVID-19</Typography>
        </CardContent>
      </Grid>
      <Grid item component={Card} xs={12} md={3} className="card card--deaths">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>Deaths</Typography>
          <Typography variant="h5" gutterBottom>
            <CountUp
              start={0}
              end={Deaths}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">{new Date(CurrentDate).toDateString()}</Typography>
          <Typography variant="body2">Number of Deaths due to COVID-19</Typography>
        </CardContent>
      </Grid>
    </Grid>
  </div>
  )
}

export default Cards