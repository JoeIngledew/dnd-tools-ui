import React, { Component } from 'react';
import NumericalInput from '../Utility/NumericalInput';
import { Well } from 'react-bootstrap';

class SingleAtkInput extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

    this.onAtkModChange = this.onAtkModChange.bind(this);
    this.onDmgModChange = this.onDmgModChange.bind(this);
    this.getValue = this.getValue.bind(this);
    this.getDmgValue = this.getDmgValue.bind(this);
  }

  onAtkModChange(name, value) {
    this.props.onAtkModChange(value, this.props.identifier)
  }

  onDmgModChange(name, value) {
    this.props.onDmgModChange(value, this.props.identifier)
  }

  getValue() {
    if (this.props.isDefault) {
      switch (this.props.identifier) {
        case 0:
        case 2:
          return 13;
        case 1:
        case 3:
          return 8;
        default:
          return 0;
      }
    }
    else {
      return 0;
    }
  }

  getDmgValue() {
    if (this.props.isDefault) {
      switch (this.props.identifier) {
        case 0:
        case 1:
          return 8;
        case 2:
        case 3:
          return 6;
        default:
          return 0;
      }
    }
    else {
      return 0;
    }
  }

  render() {
    return(
      <div>
        <Well bsSize="small">
          <NumericalInput name={"atkMod"} onChange={this.onAtkModChange} label={"AtkMod"} value={this.getValue()} />
          <NumericalInput name={"dmgMod"} onChange={this.onDmgModChange} label={"DmgMod"} value={this.getDmgValue()} />
        </Well>
      </div>
    )
  }
}

export default SingleAtkInput