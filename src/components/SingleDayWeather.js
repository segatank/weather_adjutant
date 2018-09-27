import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";

const FROM_KELVIN_TO_Celsius = 273.15;
const convertToCelcius = (kelvin) => {
  return kelvin - FROM_KELVIN_TO_Celsius
}

class SingleDayWeather extends Component {
  constructor(props) {
      super(props);
  }

  getAverageResults () {
    return  {
      temperature: this.getAverageTemperature (),
      pressure: this.getAveragePressure (),
      humidity: this.getAverageHumidity ()
    }
  }

  getAverageTemperature () {
      console.log(this.props)
      const apiDayArr = this.props.weatherPerDay;
      let avgTempResult = 0;
      apiDayArr.forEach(function(item) {
        avgTempResult += convertToCelcius(item.main.temp);
      });

      return Math.round(avgTempResult / apiDayArr.length)
  }

  getAveragePressure () {
      const apiDayArr = this.props.weatherPerDay;
      let avgPressureResult = 0;
      apiDayArr.forEach(function(item) {
        avgPressureResult += item.main.pressure;
      });

      return Math.round(avgPressureResult / apiDayArr.length)
  }

  getAverageHumidity () {
      const apiDayArr = this.props.weatherPerDay;
      let avgHumidityResult = 0;
      apiDayArr.forEach(function(item) {
        avgHumidityResult += item.main.humidity;
      });

      return Math.round(avgHumidityResult / apiDayArr.length)
  }

  render() {
    const { temperature, pressure, humidity } = this.getAverageResults ();
console.log(this.props)
    return (
      <Fragment>
        <tr>
          <th></th>
          <th>{temperature}</th>
          <th>{pressure}</th>
          <th>{humidity}</th>
        </tr>
      </Fragment>
    )
  }
}

export default SingleDayWeather;
