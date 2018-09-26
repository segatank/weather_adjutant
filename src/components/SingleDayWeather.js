import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";

const FROM_KELVIN_TO_Celsius = 273.15;

class SingleDayWeather extends Component {
  constructor(props) {
      super(props);
  }

  getAverageTemperature () {
      console.log(this.props)
      const apiDayArr = this.props.weatherPerDay;
      let avgTempResult = 0;
      apiDayArr.forEach(function(item) {
        avgTempResult += item.main.temp;
      });
      avgTempResult -= FROM_KELVIN_TO_Celsius;
      avgTempResult = avgTempResult / apiDayArr.length;

      return avgTempResult;
  }

  render() {
    console.log(this.props)
    const averageTemp = this.getAverageTemperature ();
    return (
      <Fragment>
        <th>{averageTemp} (C)</th>
        <th>(hPa)</th>
        <th>(%)</th>
      </Fragment>
    )
  }
}

export default SingleDayWeather;
