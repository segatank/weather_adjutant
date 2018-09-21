import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";

class WeatherUnit extends Component {
  render() {
    const noCityName = "Nothing to show. Please enter city name.";
    console.log(this.props)
    if (!this.props.weather) {
      return <div>{noCityName}</div>
    }
    const { temp, cloudiness, wind, preassure } = this.props.weather;
    return (
      <Fragment>
          <div>Day # </div>
          <div>Temperature : {temp}</div>
          <div>Preassure : {preassure}</div>
          <div>Wind : {wind}</div>
          <div>Cloudiness : {cloudiness}</div>
      </Fragment>
    )
  }
}


const mapStateToProps = store => {
  console.log(store)
  return {
    weather: store
  };
}

export default connect(mapStateToProps)(WeatherUnit);
