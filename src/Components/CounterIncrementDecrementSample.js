//import React, { useState } from 'react'
//import { Button } from 'semantic-ui-react'

//const CounterIncrementDecrementSample = ({ initialState }) => {
  //const [counter,setCounter] = useState(initialState.count)
  //return (
    //<div>
    //<p>counter : {counter}</p>
    //<Button primary onClick={() => setCounter(counter+1)}>Increment</Button>
    //<Button primary onClick={() => setCounter(counter-1)}>Decrement</Button>
    //</div>
  //)
//}

//export default CounterIncrementDecrementSample;

import React, { useReducer } from 'react'
import { Button } from 'semantic-ui-react'
import counterReducer from './counterReducer.js'

const CounterIncrementDecrementSample = ({ initialState }) => {
  const [state,dispatch] = useReducer(counterReducer, initialState)
  return (
    <div>
    <p>counter : {state.count}</p>
    <Button primary onClick={() => dispatch({type: `increment`})}>Increment</Button>
    <Button primary onClick={() => dispatch({type: `decrement`})}>Decrement</Button>
    </div>
  )
}

export default CounterIncrementDecrementSample;
