import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fibonacci from './FibonacciNumber';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Fibonacci />
      </div>
    );
  }
}

export default App;
