import React, { Component } from 'react';
import { Well } from 'react-bootstrap';

class AtkOutput extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  renderOutputs = () => {
    let outputs = [];
    for (let i = 0; i < this.props.atkCount; i++) {
      outputs.push(<p key={i}>{this.props.result.AttackResult[i]}</p>);
    }
    return outputs;
  }

  render() {
    if (this.props.result.AttackResult) {
      return (
        <Well>
        <div className="atk-results-section">
          {this.renderOutputs()}
          <p>Stack: {this.props.result.FinalStacks}</p>
          <p>Dmg: {this.props.result.TotalDamage}</p>
        </div>
        </Well>
      )
    } else { return (<div></div>) }
  }
}

export default AtkOutput