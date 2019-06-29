import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'

const TwoCountersOption2 = () => {
  const [{ counter, counter2 }, setCounters] = useState({
    counter: 12,
    counter2: 13
  });
  return (
    <div>
    <Button primary onClick={() => setCounters({counter: counter + 1, counter2: counter2 })}>Increment</Button>
    <p>Counter 1: {counter}</p>
    <Button primary onClick={() => setCounters({counter: counter, counter2: counter2 - 1})}>Decrement</Button>
    <p>Counter 2: {counter2}</p>
    </div>
  )
}

export default TwoCountersOption2;
