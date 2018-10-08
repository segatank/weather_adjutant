import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleDayWeather from './SingleDayWeather';

import './WeatherUnit.css';

const NUMBER_OF_DAYS = 5;

class WeatherUnit extends Component {
  renderWeather(cityData) {
    const weatherDataFromApi = cityData.list;
    const daysCluster = [];

    for (let counter = 0; counter < NUMBER_OF_DAYS; counter++) {
      daysCluster.push([]);
    }

    let beginDate = new Date(weatherDataFromApi[0].dt_txt);
    let currDate;
    let startCounter = 0;

    weatherDataFromApi.forEach(function(listItem) {
      currDate = new Date(listItem.dt_txt);

      if (beginDate.getDate() === currDate.getDate()) {
        daysCluster[startCounter].push(listItem);
      } else {
        startCounter++;
        if (startCounter < NUMBER_OF_DAYS) {
          beginDate = currDate;
          daysCluster[startCounter].push(listItem);
        } else {
          return;
        }
      }
    });

    return daysCluster.map((dayObject, index) => (
      <SingleDayWeather weatherPerDay={dayObject} key={index} />
    ));
  }

  render() {
    const NO_CITY_NAME = 'Nothing to show. Please enter city name.';
    //const CITY_NAME = this.props.weather.city.name;

    if (!this.props.weather) {
      return <div>{NO_CITY_NAME}</div>;
    }

    return (
      <table className="Weather-data-table">
        <caption>Weather for {} city:</caption>
        <thead>
          <tr>
            <th>Day #</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = store => {
  return {
    weather: store.data,
    message: store.status,
  };
};

export default connect(mapStateToProps)(WeatherUnit);
