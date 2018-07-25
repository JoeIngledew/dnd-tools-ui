import React, { Component } from 'react';
import SingleAtkInput from './SingleAtkInput';

class AtkModsInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attacks: [
        { AtkMod: 0, DmgMod: 0 }
      ],
      numInputs: 0
    }

    this.handleAdditionalInput = this.handleAdditionalInput.bind(this);
    this.handleAtkModChange = this.handleAtkModChange.bind(this);
    this.handleDmgModChange = this.handleDmgModChange.bind(this);
  }

  handleAdditionalInput(event) {
    // let newId = this.state.highestId + 1;
    // let newInput = <SingleAtkInput onAtkModChange={this.handleAtkModChange} onDmgModChange={this.handleDmgModChange} identifier={newId} />;
    // this.setState({
    //   highestId : newId,
    //   inputs: [...this.state.inputs, newInput]
    // });
    this.setState({
      numInputs: this.state.numInputs + 1
    });

    event.preventDefault();
  }

  handleAtkModChange(value, key) {
    if (this.state.attacks[key]) {
      let newState = this.state.attacks;
      newState[key].AtkMod = value;
      this.setState({
        attacks: newState
      });
    }
    else {
      this.setState({
        attacks: [...this.state.attacks, { AtkMod: value, DmgMod: 0 }]
      });
    }
    this.props.onModsChange(this.state.attacks);
  }

  handleDmgModChange(value, key) {
    if (this.state.attacks[key]) {
      let newState = this.state.attacks;
      newState[key].DmgMod = value;
      this.setState({
        attacks: newState
      });
    }
    else {
      this.setState({
        attacks: [...this.state.attacks, { AtkMod: 0, DmgMod: value }]
      });
    }
    this.props.onModsChange(this.state.attacks);
  }

  renderInputs = () => {
    let inputs = [];
    for (let i = 0; i < this.state.numInputs; i++) {
      inputs.push(<SingleAtkInput onAtkModChange={this.handleAtkModChange} onDmgModChange={this.handleDmgModChange} key={i} identifier={i} />);
    }
    return inputs;
  }

  render() {
    return (
      <div>
        {this.renderInputs()}
        <button onClick={this.handleAdditionalInput}>Add another</button>
      </div>
    )
  }
}

export default AtkModsInput