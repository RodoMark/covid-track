import React from 'react'

import { Cards, TrackerChart, CountryPicker } from './components'
import styles from './App'
import { fetchData } from './api'

class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData() 
    this.setState({ data: fetchedData })
  }
 
  render() {
    const { data } = this.state; 

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <TrackerChart />
        <CountryPicker />
      </div>
    
    );
  }
}

export default App