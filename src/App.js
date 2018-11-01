import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AtkCalc from './AtkCalc/AtkCalc'
import CalcApi from './api/calcApi';
import AtkOutput from './AtkCalc/AtkOutput';
import { Grid, Col, Row } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      result: {},
      existingStacks: 0,
      atkCount: 0
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeStacks = this.onChangeStacks.bind(this);
  }

  handleSubmit(input) {
    CalcApi.getResults(input)
      .then(results => {
        this.setState({
          result: results,
          atkCount: results.AttackResult.length,
          existingStacks: Number(results.FinalStacks)
        });
      })
      .catch(err => {
      });
  }

  onChangeStacks(newVal) {
    this.setState({
      existingStacks: newVal
    })
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <header className="App-header">
              <h1 className="App-title">Tools</h1>
            </header>
          </Row>
          <Row>
            <Col sm={12} md={6}>
              <AtkCalc onSubmit={this.handleSubmit} existingStacks={this.state.existingStacks} onChangeStacks={this.onChangeStacks} />
            </Col>
            <Col sm={12} md={6}>
              <AtkOutput result={this.state.result} atkCount={this.state.atkCount} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
