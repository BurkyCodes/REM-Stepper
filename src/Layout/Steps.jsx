import React, { useState } from 'react'
import Progress from '../components/Progress'
import Content from '../components/Content'

const Steps = () => {
  const [step,setStep] = useState(1);
  
  console.log(step);
  
  function handlePrev(){
    if(step > 1) setStep((step) => step-1);
  }

   function handleNext(){
    console.log("clicked")
    if(step < 6) setStep((step) => step+1);
  }
  

  return (
    <>
    <div className='layout-container'>
      <div className='progress-div'>
    <Progress step={step} />
      </div>
      <div className='content-div'>
    <Content setStep={setStep} step={step} handleNext={handleNext} handlePrev={handlePrev}  />
      </div>
    </div>
    </>
  )
}

export default Steps