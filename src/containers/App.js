import React, { Component } from 'react';
import SearchField from '../components/SearchField';
import WeatherUnit from '../components/WeatherUnit';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Weather adjutant welcomes you!</h1>
        </header>
        <p></p>
        <SearchField />
        <p></p>
        <WeatherUnit />
      </div>
    )
  }
}

export default App;
