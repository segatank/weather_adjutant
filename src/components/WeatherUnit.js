import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";


class WeatherUnit extends Component {

  renderWeather(cityData) {
    console.log(cityData)
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    const weatherDataFromApi = cityData.list;
    const daysCluster = [];
    const NUMBER_OF_DAYS = 5;

    for (let counter = 0; counter < NUMBER_OF_DAYS; counter++) {
      daysCluster.push([]);
    }
    console.log(daysCluster)


    let beginDate = new Date(weatherDataFromApi[0].dt_txt);
    let currDate;
    let startCounter = 0;

    //for (let i=0; i < 20; i++) {
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
      <tr key={name}>

        <td>{temps}  units="K" </td>
        <td>{pressures} units="hPa" </td>
        <td>{humidities} units="%" </td>
      </tr>
    );
  }


  render() {
    const noCityName = "Nothing to show. Please enter city name.";
    console.log(this.props)
    //console.log(this.props.weather)

    if (!this.props.weather) {
      return <div>{noCityName}</div>
    }
    //const { temp, cloudiness, wind, preassure } = this.props.weather;

    return (
      <Fragment>
          <div>Day # </div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>City</th>
                <th>Temperature (C)</th>
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
