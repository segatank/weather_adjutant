import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";

const FROM_KELVIN_TO_Celsius = 273;
const convertToCelcius = (kelvin) => {
  return kelvin - FROM_KELVIN_TO_Celsius
}

class SingleDayWeather extends Component {
  constructor(props) {
      super(props);
  }

  getAverageResults () {
    return  {
      day: this.getDay(),
      temperature: convertToCelcius(this.getAverageWeatherResult ('temp')),
      pressure: this.getAverageWeatherResult ('pressure'),
      humidity: this.getAverageWeatherResult ('humidity')
    }
  }

  getDay () {
    const apiDayArr = this.props.weatherPerDay;
    const day = new Date(apiDayArr[0].dt_txt);
    return day.getDate();
  }

  getAverageWeatherResult (weatherParam) {
      const apiDayArr = this.props.weatherPerDay;
      let avgResult = 0;
      apiDayArr.forEach(function (item) {
        avgResult += item.main[weatherParam];
      });

      return Math.round(avgResult / apiDayArr.length)
  }

  render() {
    const { day, temperature, pressure, humidity } = this.getAverageResults ();

    return (
      <Fragment>
        <tr>
          <td>{day}</td>
          <td>{temperature}</td>
          <td>{pressure}</td>
          <td>{humidity}</td>
        </tr>
      </Fragment>
    )
  }
}

export default SingleDayWeather;
