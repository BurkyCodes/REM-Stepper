import React from 'react'
// import { steps } from '../DummyData/steps'

const Progress = () => {
  return (
    <div className='container'>
        <ul className='progress_container'>
            <li className='progress'></li>
            <li className='step active 1'>1</li>
            <li className='step 2'>2</li>
            <li className='step 3'>3</li>
        </ul>
        {/* <ul>
        {steps.map((step,index) => 
         const IconComponent = step.icon
        (   
            <li key={index}>{step.name}
                  <Icon size={24} />
            </li>
        ))}
        </ul> */}
    </div>
  )
}

export default Progress