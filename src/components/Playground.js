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

function Playground(props) {
  const [count, setCount] = useState(0);

  if (count === 0) {
    console.log("Alllll by myseeeeelllllllffff!")
  }
  
  return (
    <div className="container">
      <h1>Hello world!!</h1>
      { props.happy ? <div>I'm so happy!</div> : "Ugh, why are Monday's the worst?!" }
      {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
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