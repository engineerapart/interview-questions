# Number In Fibonacci series
**Grade**: Intermediate

## Details
The candidate is asked to make a React app that interactively calculates a number in the Fibonacci series as one types in the input. It is testing the following:

 1. React (candidate should use create-react-app)
 2. Components (candidate should create a component to display the number)
 3. Handlers and events (for the input)
 4. Algorithm (for the fibonacci series)

### Rules For The Candidate
The candidate is allowed to use Google to look up anything except for the Fibonacci algorithm. This should be explicitly mentioned to the candidate. Even though a candidate is not allowed to use Google to look up the Fibonacci algorithm, they are allowed to ask questions about it and how it works.

### What To Look Out For
The perfect candidate will componentize everything, and use the *onChange* event in React. He/She will also chat about React's synthetic events and how they differ from normal events (and their purpose). They will also implement the Fibonacci algorithm very quickly and do it using dynamic programming.

Here is what to look out for:

 1. Discussion about Fibnacci algorithm. Recursive solution is $O(2^n)$ for both time and space, while dynamic programming is $O(n)$ for time, and $O(1)$ for space. Does the candidate know this, and know the difference.
 2. Does the candidate mention state. Discussions about how and when React components are updated.
 3. Synthetic events - the onchange component.
 4. PropTypes (this should at least be mentioned).
 5. Splitting things up into components

A weak candidate will need help and will not know where to start. He/She will implement everything in one big component.