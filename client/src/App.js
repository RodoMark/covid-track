import React from 'react'

import { Cards, TrackerChart, CountryPicker } from './components'
import styles from './App'
import { fetchData } from './api'

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData() 
    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    
    setState
  }
 
  render() {
    const { data } = this.state; 

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <TrackerChart />
      </div>
    
    );
  }
}

export default App