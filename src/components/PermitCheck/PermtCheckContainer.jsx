import React, { useState } from 'react'
import { permitData } from '../../DummyData/permit'
import PermitCheck from './PermtCheck'
const PermtCheckContainer = ({handleNext,handlePrev}) => {
  const [selected,setSeleceted] = useState(null)
  return (
    <div className=''>
      <h1>Where will the skip be placed?</h1>
      <p>This helps us determine if you need a permit for your skip</p>
      <ul className='permit-ul'>
        {permitData.map((permit,index) => (
          <PermitCheck
          key={index} 
          permit={permit} 
          onClick={() => setSeleceted(index)}
           isSelected={selected === index}/>
        ))}
      </ul>
        <div className='btns'>
            <button className='btn back' onClick={handlePrev}>Back</button>
            <button className='btn next' onClick={handleNext}>Continue</button>
        </div>
    </div>
  )
}

export default PermtCheckContainer