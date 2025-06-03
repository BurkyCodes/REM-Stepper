import React from 'react'
import { steps } from '../DummyData/steps'

const Progress = () => {
  return (
    <div>
        <ul>
        {steps.map((step,index) => (
            <li key={index}>{step.name}</li>
        ))}
        </ul>
    </div>
  )
}

export default Progress