import React from 'react'
import { steps } from '../DummyData/steps'

const Progress = () => {
  return (
    <div className='container'>
        {/* <ul className='progress_container'>
            <li className='progress'></li>
            <li className='step active 1'>1</li>
            <li className='step 2'>2</li>
            <li className='step 3'>3</li>
        </ul> */}
        <ul className='progress_container'>
           <li className='progress'></li>
        {steps.map((step,index) => 
        (   
            <li className='step active 1' key={index}>
                  <i className={step.icon} />
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Progress