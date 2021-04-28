import React from 'react'

import { Cards, TrackerChart, CountryPicker } from './components'
import styles from './App'
import { fetchData, fetchGlobalData } from './api'

class App extends React.Component {
  state = {
    data: {},
    countryName: 'the Whole World'
  }

  async componentDidMount() {
    const fetchedData = await fetchData() 
    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    if(country === "Global") {
      const globalData = await fetchGlobalData()
      this.setState({ data: globalData, countryName: country })
    } else {
      const fetchedData = await fetchData(country)
      this.setState({ data: fetchedData, countryName: country })
    }
  }
 
  render() {
    const { data, countryName } = this.state; 

    return (
      <div className={styles.container}>
        <Cards data={data} countryName={countryName} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <TrackerChart countryName={countryName} />
      </div>
    
    );
  }
}

export default App