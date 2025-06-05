import React from 'react'
import { permitData } from '../../DummyData/permit'
import PermitCheck from './PermtCheck'
const PermtCheckContainer = () => {
  return (
    <div>
      <h1>Where will the skip be placed?</h1>
      <p>This helps us determine if you need a permit for your skip</p>
      <ul className='permit-ul'>
        {permitData.map((permit,index) => (
          <PermitCheck key={index} permit={permit} />
        ))}
      </ul>
    </div>
  )
}

export default PermtCheckContainer