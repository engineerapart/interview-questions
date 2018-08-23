import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Note: This is dynamic programming solution
const fibDynamic = (n) => {
  if (n <= 0) return 0; // not defined for < 0, but just return 0;
  if (n === 1) return n;
  let prev = 1, prevPrev = 0, current = 0;

  for (let i=2; i <= n; i++) {
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }
  return current;
}

// Here is a recursive solution. It assumes n cannot be negative
// It is extremely simple, and extremely inefficient. It will blow up
// very quickly
const fibRecurse = (n) => {
  if (!n || n <= 0) return 0;
  if (n === 1) return n;
  return fibRecurse(n-1) + fibRecurse(n-2);
}

const FibonacciNumber = ({ number = 0 }) => (
  <div>Result: {fibDynamic(number)}</div>
)
FibonacciNumber.propTypes = {
  number: PropTypes.number.isRequired,
}

class Fibonacci extends Component {
  state = { number: 0 };

  render() {
    return (
      <React.Fragment>
        <FibonacciNumber number={parseInt(this.state.number, 10)} />
        <input
          value={this.state.number}
          onChange={(event) => this.setState({ number: event.target.value })} />
      </React.Fragment>
    )
  }
};

export default Fibonacci;
