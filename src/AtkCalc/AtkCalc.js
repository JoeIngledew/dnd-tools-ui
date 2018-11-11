import React, { Component } from 'react'
import AtkModsInput from './AtkModsInput'
import NumericalInput from '../Utility/NumericalInput'
import { FormControl,Form } from 'react-bootstrap';

class AtkCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ac: 10,
      stacks: 0,
      modifier: 0,
      dmgmodifier: 0,
      critLowerBound: 20,
      critMultiplier: 2,
      attacks: [],
      damageDie: 4
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleModsInput = this.handleModsInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);    
  }

  componentDidUpdate(prevProps) {
    if (this.props.existingStacks !== prevProps.existingStacks) {
      this.setState({
        stacks: Number(this.props.existingStacks)
      });
    }
  }

  handleInputChange(name, value) {
    if (name === "stacks") {
      this.props.onChangeStacks(Number(value));
    }

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    this.props.onSubmit(this.state);
    event.preventDefault();
  }

  handleModsInput(atks) {
    this.setState({
      attacks: atks
    });
  }

  render() {
    return (
      <div className="app-atk-section">
        <Form>
          <FormControl type="submit" onClick={this.handleSubmit} value="Calculate!" />
          <NumericalInput name={"ac"} value={this.state.ac} onChange={this.handleInputChange} label={"AC"}/>
          <NumericalInput name={"stacks"} value={this.props.existingStacks} onChange={this.handleInputChange} label={"Stacks"}/>
          <NumericalInput name={"modifier"} value={this.state.modifier} onChange={this.handleInputChange} label={"AtkModifier"}/>
          <NumericalInput name={"dmgmodifier"} value={this.state.dmgmodifier} onChange={this.handleInputChange} label={"DmgModifier"}/>
          <NumericalInput name={"critLowerBound"} value={this.state.critLowerBound} onChange={this.handleInputChange} label={"CritLowerBound"}/>
          <NumericalInput name={"critMultiplier"} value={this.state.critMultiplier} onChange={this.handleInputChange} label={"CritMultiplier"}/>
          <NumericalInput name={"damageDie"} value={this.state.damageDie} onChange={this.handleInputChange} label={"DamageDie"}/>
          
          <AtkModsInput onModsChange={this.handleModsInput} />
        </Form>
      </div>
    );
  }
}

export default AtkCalc;