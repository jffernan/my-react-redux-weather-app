import React from 'react';
import { Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';

const CityForm = (props) =>
  <div>
    <Form onSubmit={props.addNewCitySubmit}>
      <FormGroup validationState="success">
        <div className="form">
          <ControlLabel>
            <FormControl
              type="text"
              name="name"
              value={props.name}
              onChange={props.handleNameChange}
              id="name"
              placeholder={"Enter Name Of New City."}
              autoComplete="on"
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
              Save New City
            </span>
          </Button>
        </div>
      </FormGroup>
    </Form>
  </div>

export default CityForm;
