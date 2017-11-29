import React from 'react';

const OutputDisplay = (props) =>
  <div>
    <div className="outputDisplay">
      <br/>
      <p className="temp-wrapper">Current Temperature:
        <span className="temp">{ props.tempOutput }</span>
        <span className="temp-symbol"> °F</span>
      </p>
      <p className="cond-wrapper">Current Conditions:
        <span className="cond">{ props.condOutput }</span>
      </p>
      <br/>
    </div>
    <footer className="App-footer">
      <h4 className="App-code">
        <a target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/jffernan/my-react-weather-app">
          Visit GitHub To View My Code
        </a>
      </h4>
    </footer>
  </div>

export default OutputDisplay;
/*
OutputDisplay.defaultProps = {
  locOutput: 'Please Enter Above.',
  tempOutput: 'Not Loaded Yet.',
  condOutput: 'Not Loaded Yet.'
};
*/
