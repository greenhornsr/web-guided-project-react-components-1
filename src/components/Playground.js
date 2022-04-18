/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - A slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/

import React, { useState } from 'react';
// Stop user from incrementing count to greater than 10

function Playground(props) {
  const [count, setCount] = useState(0);
  const [spinnerOn, setSpinnerOn] = useState(false);

  const updateCount = (num) => {
    if (count >= 10 || count + num < 0) {
      return;
    }

    setCount(count + num);
  }

  if (spinnerOn) {
    return (
      <div>
        LOADING PLEASE WAIT COMING SOON
        <button onClick={() => setSpinnerOn(false)}>DATA IS BACK WE'RE READY TO ROCK AND ROLL BAAAAAABY!!!</button>
      </div>
    )
  }
  
  return (
    <div className="container">
      <h1>Hello world!!</h1>
      { props.happy ? <div>I'm so happy!</div> : "Ugh, why are Monday's the worst?!" }
      {count}
      <button onClick={() => updateCount(1)}>Increment</button>
      <button onClick={() => updateCount(-1)}>Decrement</button>
      <button onClick={() => setSpinnerOn(true)}>LOAD SOME DATA WOOOOO!</button>
    </div>
  )
}

export default Playground;

/**
 * if (props.happy) {
 *   return "I'm so happy!"
 * } else {
 *   return "Ugh, why are Monday's the worst?!"
 * }
 */

/**
 * What is state? Data that lives in the component!
 * What are props? Data that's passed from parent to child!!!
 */

/**
 * NEVER MUTATE STATE DIRECTLY
 * NEVER MUTATE STATE DIRECTLY
 */