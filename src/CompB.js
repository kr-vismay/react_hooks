import React from 'react'
import { useContext } from 'react'
import { Data } from './App'

function CompB() {
    const ctx = useContext(Data);
  return (
    <div>
      <h1>my name is {ctx.name}</h1>
      <h1>my add is {ctx.add}</h1>
    </div>
  )
}

export default CompB
