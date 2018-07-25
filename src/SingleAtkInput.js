import React, { Component } from 'react';

class SingleAtkInput extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

    this.onAtkModChange = this.onAtkModChange.bind(this);
    this.onDmgModChange = this.onDmgModChange.bind(this);
  }

  onAtkModChange(event) {
    this.props.onAtkModChange(event.target.value, this.props.identifier)
  }

  onDmgModChange(event) {
    this.props.onDmgModChange(event.target.value, this.props.identifier)
  }

  render() {
    return(
      <div>
        <label>
          AtkMod
          <input type="number" name="atkMod" onChange={this.onAtkModChange} />
        </label>
        <label>
          DmgMod
          <input type="number" name="dmgMod" onChange={this.onDmgModChange} />
        </label>
      </div>
    )
  }
}

export default SingleAtkInput