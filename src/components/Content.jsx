import React from 'react'
import WasteTypes from './WasteTypes/WasteTypes'
import SkipSizeContainer from './SkipSize/SkipSizeContainer'

const Content = ({step,setStep}) => {

  if(step == 1){
   return (
    <div className='content'>
        <WasteTypes />   
    </div>
  )
  }
  else if(step == 2){
   return (
    <div className='content'>
        <SkipSizeContainer />
    </div>
  )
  }
 
}

export default Content