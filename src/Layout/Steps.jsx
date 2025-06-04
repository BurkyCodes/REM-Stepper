import React, { useState } from 'react'
import Progress from '../components/Progress'
import Content from '../components/Content'

const Steps = () => {
  const [step,setSteps] = useState(1);

  function handlePrev(){
    if(step > 1) setSteps((step) => step-1);
  }

   function handleNext(){
    if(step < 6) setSteps((step) => step+1);
  }
  

  return (
    <>
    <div className='layout-container'>
      <div className='progress-div'>
    <Progress step={step} />
      </div>
      <div className='content-div'>
    <Content setStep={setSteps} step={step}  />
      </div>
    </div>
    </>
  )
}

export default Steps