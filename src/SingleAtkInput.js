import React, { Component } from 'react';
import NumericalInput from './NumericalInput';
import { Well } from 'react-bootstrap';

class SingleAtkInput extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

    this.onAtkModChange = this.onAtkModChange.bind(this);
    this.onDmgModChange = this.onDmgModChange.bind(this);
  }

  onAtkModChange(name, value) {
    this.props.onAtkModChange(value, this.props.identifier)
  }

  onDmgModChange(name, value) {
    this.props.onDmgModChange(value, this.props.identifier)
  }

  render() {
    return(
      <div>
        <Well bsSize="small">
          <NumericalInput name={"atkMod"} onChange={this.onAtkModChange} label={"AtkMod"} value={0} />
          <NumericalInput name={"dmgMod"} onChange={this.onDmgModChange} label={"DmgMod"} value={0} />
        </Well>
      </div>
    )
  }
}

export default SingleAtkInput

/* <label>
          AtkMod
          <input type="number" name="atkMod" onChange={this.onAtkModChange} />
        </label>
        <label>
          DmgMod
          <input type="number" name="dmgMod" onChange={this.onDmgModChange} />
        </label> */