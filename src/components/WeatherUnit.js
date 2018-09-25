import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";

class WeatherUnit extends Component {
//
  renderWeather(cityData) {
    console.log(cityData)
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td> lon={lon} lat={lat} </td>
        <td>{temps}  units="K" </td>
        <td>{pressures} units="hPa" </td>
        <td>{humidities} units="%" </td>
      </tr>
    );
  }
//

  render() {
    const noCityName = "Nothing to show. Please enter city name.";
    console.log(this.props)
    console.log(this.props.weather)

    if (!this.props.weather) {
      return <div>{noCityName}</div>
    }
    //const { temp, cloudiness, wind, preassure } = this.props.weather;
  //  const { list } = this.props.weather.list;
    //console.log(list)
    return (
      <Fragment>
          <div>Day # </div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>City</th>
                <th>Temperature (K)</th>
                <th>Pressure (hPa)</th>
                <th>Humidity (%)</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.weather.map(this.renderWeather)
                // list.forEach (function (item) {
                //   <DisplayOneDayWeatherBlock props={item}/>
                // })
                //this.props.weather.map(itm => <DisplayOneDayWeatherBlock props={itm.list}/>)
              }
            </tbody>
          </table>
      </Fragment>
    )
  }
}


const mapStateToProps = store => {
  return {
    weather: store
  };
}

export default connect(mapStateToProps)(WeatherUnit);
