import React from 'react'
import WasteTypesContainer from './WasteTypes/WasteTypesContainer'
import SkipSizeContainer from './SkipSize/SkipSizeContainer'
import PermtCheckContainer from './PermitCheck/PermtCheckContainer';
import DeliveryDateContainer from './DeliveryDate/DeliveryDateContainer';

const Content = ({step,setStep,handleNext,handlePrev}) => {

    switch (step) {
    case 1:
      return <WasteTypesContainer handleNext={handleNext} handlePrev={handlePrev} />;
    case 2:
      return <SkipSizeContainer handleNext={handleNext} handlePrev={handlePrev} /> 
    case 3:
      return <PermtCheckContainer handleNext={handleNext} handlePrev={handlePrev} /> 
    case 4:
      return <DeliveryDateContainer handleNext={handleNext} handlePrev={handlePrev} />
      default:
      return null;
  }

 
}

export default Content