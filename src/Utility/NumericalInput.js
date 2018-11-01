import React, { Component } from 'react';
import '../App.css';
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
          <FormControl type="number" onChange={x => this.handleInputChange(this.state.name, x.target.value)} value={this.state.value} />
        </FormGroup>
      </div>
    )
  }
}

export default NumericalInput