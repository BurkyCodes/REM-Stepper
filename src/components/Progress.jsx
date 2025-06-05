import React from 'react'
import { steps } from '../DummyData/steps'

const Progress = ({step}) => {

  const STEP_HEIGHT = 140;
  const containerOffset = (steps.length / 2 - step + 0.5) * STEP_HEIGHT; 
  return (
    <div className=''>
        {/* <ul className='progress_container'>
            <li className='progress'></li>
            <li className='step active 1'>1</li>
            <li className='step 2'>2</li>
            <li className='step 3'>3</li>
        </ul> */}
        <ul 
        className='progress_container'
         style={{ transform: `translateY(${containerOffset}px)` }}>
           <li 
           className='progress'
           ></li>
        {steps.map((s,index) => 
        (   
            <li 
              className={`step ${index + 1 === step ? 'active' : ''}`}
             key={index}>
                  <i className={s.icon} />
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Progress