import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AtkCalc from './AtkCalc'
import CalcApi from './api/calcApi';

class App extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(input) {
    alert("Submitted" + JSON.stringify(input));
    let result = CalcApi.getResults(input);
    alert("Result" + JSON.stringify(result));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tools</h1>
        </header>
        <AtkCalc onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
