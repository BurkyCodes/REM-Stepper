import React from 'react'
import WasteTypes from './WasteTypes/WasteTypes'
import SkipSizeContainer from './SkipSize/SkipSizeContainer'

const Content = ({step,setStep,handleNext,handlePrev}) => {

    switch (step) {
    case 1:
      return <WasteTypes handleNext={handleNext} handlePrev={handlePrev} />;
    case 2:
      return <SkipSizeContainer handleNext={handleNext} handlePrev={handlePrev} /> 
    
    default:
      return null;
  }

 
}

export default Content