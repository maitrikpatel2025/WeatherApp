import React, { Component }         from "react";
import { connect }                  from "react-redux";
import Chart                        from "../Chart/Chart";

import "./Weather.css";

class Weather extends Component {
  state = {};
  renderWeather() {
    return this.props.weathers.map((weather) => {
      const name  = weather.city.name;
      const temps = weather.list.map((weathertemp) => weathertemp.main.temp);
      const press = weather.list.map(weatherpress=>weatherpress.main.pressure);
      const humid = weather.list.map(weatherhumid=>weatherhumid.main.pressure);
      
      return (
        <tr key={name}>
          <td>{name}</td>
          <td>
           <Chart data={temps} color='blue' unit='K'/>
          </td>
          <td>
           <Chart data={press} color='green' unit='hPa'/>
          </td>
          <td>
           <Chart data={humid} color='black' unit='%'/>
          </td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div className="Weather">
        <div className="container">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>City</th>
                <th>Temperature(K)</th>
                <th>Pressure(hPa)</th>
                <th>Humidity(%)</th>
              </tr>
            </thead>
            <tbody>{this.renderWeather()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { weathers: state.weather };
};

export default connect(mapStateToProps)(Weather);
