import React from 'react';
import { Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';

const LocationForm = (props) =>
  <div className="weatherApp">
    <Form onSubmit={props.fetchDataSubmit}>
      <FormGroup validationState="success">
        <div className="form">
          <ControlLabel>Please 'Enter' City Or 'Select' Below:
            <FormControl
              type="text"
              name="location"
              id="location"
              autoComplete="on"
              value={props.location}
              onChange={props.changeLocationSubmit}
            />
          </ControlLabel>
        </div>
        <div className="submit">
          <Button
            id="submit"
            type="submit"
            bsStyle="primary"
            disabled={props.disabled}
            active>
            <span className = "button-text">
              Fetch Weather
            </span>
          </Button>
        </div>
      </FormGroup>
    </Form>
  </div>

  export default LocationForm;
