import React, { Component } from 'react';
import './App.css';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class NumericalInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 0,
      name: "",
      label: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      value: this.props.value,
      name: this.props.name,
      label: this.props.label
    })
  }

  componentDidUpdate(prevProps) {
    if(this.props.value !== prevProps.value) {
      //console.log("updating prop value! in numerical input")
      this.setState({
        value: this.props.value
      })
    }
  }

  handleInputChange(target, value) {
    this.props.onChange(target, value)
  }

  getValidationState() {
    return null;
  }

  render() {
    return (
      <div>
        <FormGroup
          controlId={this.state.name}
          validationState={this.getValidationState()}>
          <ControlLabel>{this.props.label}</ControlLabel>
          <FormControl type="number" onChange={x => this.handleInputChange(this.state.name, x.target.value)} placeholder={this.state.value} />
        </FormGroup>
      </div>
    )
  }
}

export default NumericalInput

/* <Col sm={6} md={4}>
            <label htmlFor={this.state.name} className="input-label">
              {this.props.label}
            </label>
          </Col>
          <Col sm={6} md={8}>
            <input id={this.state.name} type="number" onChange={this.handleInputChange} name={this.state.name} value={this.state.value} className="input-numerical" />
          </Col> */