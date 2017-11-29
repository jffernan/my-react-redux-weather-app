import React, { Component } from 'react';
import City from './City'
import CityForm from './CityForm'
import Button from 'react-bootstrap/lib/Button';
import { connect } from 'react-redux';
import { handleChange, toggleCityFormOnClick } from './actions';

export class CitiesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { cityList: [], name: '' };
    this.addNewCity = this.addNewCity.bind(this);
  };

  componentDidMount() {
    const cities = [
      {id: 3, name: "Chicago"},
      {id: 4, name: "Houston"},
      {id: 2, name: "Los Angeles"},
      {id: 1, name: "New York"},
      {id: 5, name: "Phoenix"}
    ];
    this.setState({
      cityList: cities
    });
  };

  passCityName =  ( name ) => {
    this.props.fetchDataClick(name)
  }

  handleToggle() {
    this.props.dispatch(toggleCityFormOnClick(this.props.toggleCityForm));
  }

  handleChange = (event) => {
    this.props.dispatch(handleChange(event.target.value));
  }

  removeCity = (index) => {
    this.setState({
      cityList: [...this.state.cityList.slice(0, index),
        ...this.state.cityList.slice(index + 1)
      ]
    });
  };

  addNewCity = (e) => {
    e.preventDefault();
    if (!this.props.name.length) {
      return;
    }
    const data = {
      name: this.props.name
    };
    this.setState({
      cityList: this.state.cityList.concat(data)
    });
  };

  render() {
    let cities = this.state.cityList;
    let searchString = this.props.searchString.trim().toLowerCase();

    if(searchString.length > 0){
      cities = cities.filter((city) => {
        return (
          city.name.toLowerCase().match( searchString )
        );
      });
    }

    const { name } = this.props;
    const isEnabled =
      name.length > 0;

    return (
      <div>
        <ul>
          { cities.map((city, index) => {
            return (
              <City key={city.id}
                cityName = {city.name}
                handleClick={this.passCityName.bind(this, city.name)}
                removeCity={this.removeCity.bind(this, index)}
              />
            )
          })}
        </ul>
        <div className="addNewCity" >
          <Button
            onClick={this.handleToggle.bind(this)}
            type="submit"
            style={{marginBottom: '5px'}}
            bsStyle="primary" active>
            <span className = "button-text">
              Add New City
            </span>
          </Button>
        </div>
        { this.props.toggleCityForm &&
          <CityForm
            addNewCitySubmit={this.addNewCity}
            name={this.props.name}
            handleNameChange={this.handleChange}
            disabled={!isEnabled}
          />
        }
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(CitiesContainer);
