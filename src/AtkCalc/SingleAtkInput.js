import React, { Component } from 'react';
import NumericalInput from '../Utility/NumericalInput';
import { Well } from 'react-bootstrap';

class SingleAtkInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      AtkMod: 0,
      DmgMod: 0
    }

    this.onAtkModChange = this.onAtkModChange.bind(this);
    this.onDmgModChange = this.onDmgModChange.bind(this);
  }

  onAtkModChange(name, value) {
    console.log("atk mod change, Single attack input")
    this.props.onAtkModChange(value, this.props.identifier)
    this.setState({
      AtkMod: value
    })
  }

  onDmgModChange(name, value) {
    this.props.onDmgModChange(value, this.props.identifier)
    this.setState({
      DmgMod: value
    })
  }

  render() {
    return(
      <div>
        <Well bsSize="small">
          <NumericalInput name={"atkMod"} onChange={this.onAtkModChange} label={"AtkMod"} value={this.state.AtkMod} />
          <NumericalInput name={"dmgMod"} onChange={this.onDmgModChange} label={"DmgMod"} value={this.state.DmgMod} />
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