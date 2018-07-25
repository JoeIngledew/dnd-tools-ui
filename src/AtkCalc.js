import React, { Component } from 'react'
import AtkModsInput from './AtkModsInput'

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

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

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
      <div>
        <form>
          <label>
            AC
            <input type="number" onChange={this.handleInputChange} name="ac" />
          </label>
          <label>
            <i>BitW</i> stacks
            <input type="number" onChange={this.handleInputChange} name="stacks" />
          </label>
          <label>
            Modifier
            <input type="number" onChange={this.handleInputChange} name="modifier" />
          </label>
          <label>
            Crit Lower Bound
            <input type="number" onChange={this.handleInputChange} name="critLowerBound" />
          </label>
          <label>
            Crit Multiplier
            <input type="number" onChange={this.handleInputChange} name="critMultiplier" />
          </label>
          <AtkModsInput onModsChange={this.handleModsInput} />
          <input type="submit" onClick={this.handleSubmit} value="Submit" />
        </form>
      </div>
    );
  }
}

export default AtkCalc;

