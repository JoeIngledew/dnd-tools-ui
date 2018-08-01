import React, { Component } from 'react'
import AtkModsInput from './AtkModsInput'
import NumericalInput from './NumericalInput'
import { FormControl,Form } from 'react-bootstrap';

class AtkCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ac: 10,
      stacks: 0,
      modifier: 0,
      critLowerBound: 20,
      critMultiplier: 2,
      attacks: []
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleModsInput = this.handleModsInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);    
  }

  componentDidUpdate(prevProps) {
    if (this.props.existingStacks !== prevProps.existingStacks) {
      console.log("Updating AtkCalc state with new val for stacks")
      console.log(this.props.existingStacks)
      this.setState({
        stacks: Number(this.props.existingStacks)
      });
    }
  }

  handleInputChange(name, value) {
    if (name === "stacks") {
      console.log("stacks updated in AtkCalc to " + value)
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
          <NumericalInput name={"modifier"} value={this.state.modifier} onChange={this.handleInputChange} label={"Modifier"}/>
          <NumericalInput name={"critLowerBound"} value={this.state.critLowerBound} onChange={this.handleInputChange} label={"CritLowerBound"}/>
          <NumericalInput name={"critMultiplier"} value={this.state.critMultiplier} onChange={this.handleInputChange} label={"CritMultiplier"}/>
          
          <AtkModsInput onModsChange={this.handleModsInput} />
        </Form>
      </div>
    );
  }
}

export default AtkCalc;

/* <label>
            AC
            <input type="number" onChange={this.handleInputChange} name="ac" value={this.state.ac} />
          </label>
          <label>
            <i>BitW</i> stacks
            <input type="number" onChange={this.handleInputChange} name="stacks" value={this.props.existingStacks} />
          </label>
          <label>
            Modifier
            <input type="number" onChange={this.handleInputChange} name="modifier" value={this.state.modifier}/>
          </label>
          <label>
            Crit Lower Bound
            <input type="number" onChange={this.handleInputChange} name="critLowerBound" value={this.state.critLowerBound} />
          </label>
          <label>
            Crit Multiplier
            <input type="number" onChange={this.handleInputChange} name="critMultiplier" value={this.state.critMultiplier} />
          </label> */