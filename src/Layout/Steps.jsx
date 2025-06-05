import React, { useState } from 'react'
import Progress from '../components/Progress'
import Content from '../components/Content'

const Steps = () => {
  const [step,setStep] = useState(1);
  const totalSteps = 5;
  
 
  
  function handlePrev(){
    if(step > 1) setStep((step) => step-1);
  }

   function handleNext(){
    if(step < 6) setStep((step) => step+1);
  }
  

  return (
    <>
    <div className='layout-container'>
      <div className='progress-div'>
    <Progress totalSteps={totalSteps} step={step} />
      </div>
      <div className='content-div'>
    <Content setStep={setStep} step={step} handleNext={handleNext} handlePrev={handlePrev}  />
      </div>
    </div>
    </>
  )
}

export default Steps