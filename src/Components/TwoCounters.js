import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'

const TwoCounters = () => {
  const [counter, setCounter] = useState(2)
  const [counter2, setCounter2] = useState(3)
  return (
    <div>
    <Button primary onClick={() => setCounter(counter + 1)}>Increment</Button>
    <p>Counter 1: {counter}</p>
    <Button primary onClick={() => setCounter2(counter2 - 1)}>Decrement</Button>
    <p>Counter 2: {counter2}</p>
    </div>
  )
}

export default TwoCounters;
