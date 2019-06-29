import React, { useState, useEffect } from 'react'
import moment from 'moment'

const Clock = props => {
  const [showClock, setShowClock] = useState(true)

  const writeTime = () => {
    const now = moment()
    document.title = now.format("HH:mm:ss");
  }

  useEffect(() => {
    const handle = setInterval(writeTime, 500)
    return () => clearInterval(handle)
  },[])
  return (
    <div onClick={() => setShowClock(!showClock)}>
    {showClock ? <p>test</p> : ''}
    </div>
  )
}

export default Clock;
