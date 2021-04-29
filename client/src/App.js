import React from 'react'

import { Cards, TrackerChart, CountryPicker, Sidebar } from './components'
import './App.scss';
import { fetchData, fetchGlobalData } from './api'

class App extends React.Component {
  state = {
    data: {},
    countryName: 'Global'
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
      <div className="container">
        <Sidebar />
        <Cards data={data} countryName={countryName} />
        <section id="dashboard">
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <TrackerChart countryName={countryName} />
        </section>
      </div>
    
    );
  }
}

export default App