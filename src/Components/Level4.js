import React, { useContext } from 'react'
import { Button } from 'semantic-ui-react'
import { LanguageContext } from './LanguageContext.js'

const Level4 = () => {
  const value = useContext(LanguageContext)
  console.log(value)
  return (
    <div>
    Level4
    <br />
    <Button secondary>{value === 'english' ? 'Click' : 'Clique'}</Button>
    </div>
  )
}

export default Level4;
