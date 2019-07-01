import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Comments1 = ({resource}) => {
  const [resources, setResources] = useState([])
  const url = `https://jsonplaceholder.typicode.com/${resource}`

  const fetchResources = () => {
    axios.get(url).then(res => {
      setResources(res.data)
    }).catch(err => console.log(err))
  }

  useEffect(fetchResources, [resource])

  const elements = (
    <ul>
        {resources.map((res, index) => (
          <li key={index}>{res.name}</li>
        ))}
        </ul>
  )

  return (
    <div>
        <p>Comments1</p>
          {elements}
    </div>
  )
}

export default Comments1
