import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp -273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);


    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="red" units="oC" /></td>
        <td><Chart data={pressures} color="purple" units="hPa" /></td>
        <td><Chart data={humidities} color="blue" units="%" /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (oC)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
          <tr>
            <td>{console.log(this.props.weather)}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {       //  function mapStateToProps(state) {
  return { weather }                          //    return { weather: state.weather }
}                                             //  }

export default connect(mapStateToProps)(WeatherList);