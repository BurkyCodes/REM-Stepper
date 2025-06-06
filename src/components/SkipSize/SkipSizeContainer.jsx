import React,{useState} from 'react'
import { skipsizedata } from '../../DummyData/skipSize'
import SkipSize from './SkipSize'


const SkipSizeContainer = ({handleNext,handlePrev}) => {
   const [selectedSkip, setSelectedSkip] = useState(null);

  const selectedSkipData = selectedSkip !== null ? skipsizedata[selectedSkip] : null;

   
  const handleSkipSelect = (index) => {
    if(selectedSkip === index){
      setSelectedSkip(null)
    }
    setSelectedSkip(index);
  };
  
  return (
    <div className='skip-sizecontainer'>
      <div>
        <h1>Choose Your Skip Size</h1>
        <p>Select the skip size that bests suits your needs</p>
        </div>
        <ul className='skip-container'>
          {skipsizedata.map((skip,index) => (
          <SkipSize 
           key={index} skip={skip}
           isSelected={selectedSkip === index}
           onSelect={() => handleSkipSelect(index)}
           />
          ))}
        
        </ul>
        {selectedSkipData && (
      <div className='sticky-text'>
        <p className="small-text">
          Imagery and information shown throughout this website may not reflect 
          the exact shape or size speculation, colours may vary, options and/or accessories may be featured at additional cost.
        </p>
         <p className=''> {selectedSkipData.size} Yard Skip</p>
         <p className='sticky-price'>£{selectedSkipData.price_before_vat}</p>
         <p>{selectedSkipData.hire_period_days} day hire period</p>
        <div className='btns'>
            <button className='btn back' onClick={handlePrev}>Back</button>
            <button className='btn next' onClick={handleNext}>Continue</button>
        </div>
        </div>

        )}
       
        
    </div>
  )
}

export default SkipSizeContainer