import React from 'react';

const City = (props) =>
  <div className = "cityList" >
    <li onClick={props.handleClick}>
      {props.cityName}
    </li>
    <span className="deleteButton"
      onClick={ props.removeCity }>X
    </span>
  </div>

export default City;
