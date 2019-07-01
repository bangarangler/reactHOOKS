import React from 'react'
import { useFetchResources } from './customHooks/useFetchResources.js'

const Albums1 = ({resource}) => {

  const resources = useFetchResources(resource)

  const elements = (
    <ul>
        {resources.map((res, index) => (
          <li key={index}>{res.title}</li>
        ))}
        </ul>
  )

  return (
    <div>
        <p>Albums1</p>
          {elements}
    </div>
  )
}

export default Albums1
