import React, { Component } from 'react';
import {
  MONTHS,
  DAYS_OF_THE_WEEK,
  convertToCelcius
} from '../assets/Constants';


class SingleDayWeather extends Component {
  getAverageResults() {
    return {
      day: this.getDay(),
      temperature: convertToCelcius(this.getAverageWeatherResult('temp')),
      pressure: this.getAverageWeatherResult('pressure'),
      humidity: this.getAverageWeatherResult('humidity'),
    };
  }

  getDay() {
    const apiDayArr = this.props.weatherPerDay;
    const day = new Date(apiDayArr[0].dt_txt);

    return `${day.getDate()} of
              ${MONTHS[day.getMonth()]},
              ${DAYS_OF_THE_WEEK[day.getDay()]}`;
  }

  getAverageWeatherResult(weatherParam) {
    const apiDayArr = this.props.weatherPerDay;
    let avgResult = 0;
    
    apiDayArr.forEach(function(item) {
      avgResult += item.main[weatherParam];
    });

    return Math.round(avgResult / apiDayArr.length);
  }

  render() {
    const { day, temperature, pressure, humidity } = this.getAverageResults();

    return (
      <tr>
        <td>{day}</td>
        <td>{temperature}</td>
        <td>{pressure}</td>
        <td>{humidity}</td>
      </tr>
    );
  }
}

export default SingleDayWeather;
