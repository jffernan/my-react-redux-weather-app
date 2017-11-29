import React, { Component } from 'react';
import '../App.css';
import LocationForm from './LocationForm';
import CitiesContainer from './CitiesContainer';
import OutputDisplay from './OutputDisplay';
import { connect } from 'react-redux';
import { changeLocation, fetchData } from './actions';

class WeatherApp extends Component {

  callFetchData = (name) => {
    this.fetchData(null, name)
  }

  fetchData = (e, location) => {
    if (e) {
      e.preventDefault();
    }

    let newLocation = this.props.location || location
    let encodedLocation = encodeURIComponent(newLocation);
    let urlPrefix = 'https://api.openweathermap.org/data/2.5/forecast?q=';
    let urlSuffix = '&APPID=eec418ceb1be72168ff8ff738033e935&units=imperial';
    let url = urlPrefix + encodedLocation + urlSuffix;
    this.props.dispatch(fetchData(url));//call function thunked action
  };

  changeLocation = (event) => {
    this.props.dispatch(changeLocation(event.target.value));
  };

  render() {
    const { location } = this.props;
    const isEnabled =
      location.length > 0;

    let currentTemp = 'Not Loaded Yet.';
    let currentCond = 'Not Loaded Yet.';
    if (this.props.data.list) {
      currentTemp = Math.round(this.props.data.list[0].main.temp);
      currentCond = this.props.data.list[1].weather[0].description;
      //currentLat = this.props.data.city.coord.lat;
      //currentLon = this.props.data.city.coord.lon;
    }

    return (
      <div className = "weatherApp">
        <LocationForm
          fetchDataSubmit = { this.fetchData}
          changeLocationSubmit = { this.changeLocation }
          location = { this.props.location }
          disabled={!isEnabled}
        />
        <CitiesContainer
          fetchDataClick= {this.callFetchData}
          searchString = { this.props.location }
        />
        <OutputDisplay
          tempOutput = { currentTemp }
          condOutput = { currentCond }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(WeatherApp);
