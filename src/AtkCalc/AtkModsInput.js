import React, { Component } from 'react';
import SingleAtkInput from './SingleAtkInput';
import { Button } from 'react-bootstrap';

class AtkModsInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attacks: [
        { AttackBonus: 0, DamageBonus: 0 }
      ],
      numInputs: 0,
      isDefault: false
    }

    this.handleAdditionalInput = this.handleAdditionalInput.bind(this);
    this.handleAtkModChange = this.handleAtkModChange.bind(this);
    this.handleDmgModChange = this.handleDmgModChange.bind(this);
    this.handleDefaultAttackInput = this.handleDefaultAttackInput.bind(this);
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

  handleDefaultAttackInput() {
    this.setState({
      numInputs: 4,
      isDefault: true
    });
  }

  handleAtkModChange(value, key) {
    if (this.state.attacks[key]) {
      let newState = this.state.attacks;
      newState[key].AttackBonus = value;
      this.setState({
        attacks: newState
      });
    }
    else {
      this.setState({
        attacks: [...this.state.attacks, { AttackBonus: value, DamageBonus: 0 }]
      });
    }
    this.props.onModsChange(this.state.attacks);
  }

  handleDmgModChange(value, key) {
    if (this.state.attacks[key]) {
      let newState = this.state.attacks;
      newState[key].DamageBonus = value;
      this.setState({
        attacks: newState
      });
    }
    else {
      this.setState({
        attacks: [...this.state.attacks, { AttackBonus: 0, DamageBonus: value }]
      });
    }
    this.props.onModsChange(this.state.attacks);
  }

  renderInputs = () => {
    let inputs = [];
    for (let i = 0; i < this.state.numInputs; i++) {
      inputs.push(<SingleAtkInput onAtkModChange={this.handleAtkModChange} onDmgModChange={this.handleDmgModChange} key={i} identifier={i} isDefault={this.state.isDefault} />);
    }

    // if (this.state.isDefault) {
    //   handleAtkModChange(13, 0);
    //   handleAtkModChange(8, 1);
    //   handleAtkModChange(13, 2);
    //   handleAtkModChange(8, 3);
    //   handleDmgModChange(8, 0);
    //   handleDmgModChange(8, 1);
    //   handleDmgModChange(6, 2);
    //   handleDmgModChange(6, 3);
    // }

    return inputs;
  }

  render() {
    return (
      <div>
        <Button block bsStyle="info" onClick={this.handleAdditionalInput}>Add an attack</Button>
        <Button block bsStyle="success" onClick={this.handleDefaultAttackInput}>Default</Button>
        {this.renderInputs()}
      </div>
    )
  }
}

export default AtkModsInput