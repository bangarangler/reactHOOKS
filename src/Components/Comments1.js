import React from 'react'
import {useFetchResources} from './customHooks/useFetchResources.js'

const Comments1 = ({resource}) => {

  const resources = useFetchResources(resource)

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
