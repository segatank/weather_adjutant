import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import SingleDayWeather from './SingleDayWeather';


class WeatherUnit extends Component {

  renderWeather(cityData) {
    console.log(cityData)
    const name = cityData.city.name;

    const weatherDataFromApi = cityData.list;
    const daysCluster = [];
    const NUMBER_OF_DAYS = 5;

    for (let counter = 0; counter < NUMBER_OF_DAYS; counter++) {
      daysCluster.push([]);
    }

    let beginDate = new Date(weatherDataFromApi[0].dt_txt);
    let currDate;
    let startCounter = 0;

    for (let i=0; i < weatherDataFromApi.length; i++) {
      currDate = new Date(weatherDataFromApi[i].dt_txt);

      if (beginDate.getDate() === currDate.getDate()) {
        daysCluster[startCounter].push(weatherDataFromApi[i]);
      } else {
        startCounter++;
        if (startCounter < NUMBER_OF_DAYS) {
          beginDate = currDate;
          daysCluster[startCounter].push(weatherDataFromApi[i]);
        } else {
          break;
        }
      }
    }

    return (
        daysCluster.map((dayObject, index) => <SingleDayWeather weatherPerDay={dayObject} key={index} />)
    )
  }


  render() {
    const NO_CITY_NAME = "Nothing to show. Please enter city name.";
    console.log(this.props)
    //const CITY_NAME = this.props.weather.city.name;

    if (!this.props.weather) {
      return <div>{NO_CITY_NAME}</div>
    }

    return (
      <Fragment>
        {!this.props.weather
          ?
          <div>{NO_CITY_NAME}</div>
          :
          <table className="table table-hover">
            <caption>Weather for {} city:</caption>
            <thead>
              <tr>
                <th>Day #</th>
                <th>Temperature (C)</th>
                <th>Pressure (hPa)</th>
                <th>Humidity (%)</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.weather.map(this.renderWeather)
              }
            </tbody>
          </table>
        }
      </Fragment>
    )
  }
}


const mapStateToProps = store => {
  return {
    weather: store
  }
}

export default connect(mapStateToProps)(WeatherUnit);
