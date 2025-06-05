import React, { useState } from 'react'
import { wastesData } from '../../DummyData/wasteTypes'

const WasteTypeDrawer = ({handlePrev,handleDecision}) => {
  const [wastesSelected,setSelectedWastes] = useState([])
  // const [notice,setNotice] = useState(false)


  const handleSelect = (waste) => {
    setSelectedWastes((prev) => {
    const isSelected = prev.some((item) => item.index === waste.index);
    if (isSelected) {
      return prev.filter((item) => item.index !== waste.index); 
    } else {
      return [...prev, waste]; 
    }
  });
  } 

  // const handleNextClick = () => {
  //   if(!notice){
  //       setNotice(true);
  //       return;
  //   }
  //   handleNext()
  // }

  
  const isWasteSelected = (waste) =>
    wastesSelected.some((item) => item.index === waste.index);

  return (
    <div className='waste-type-drawer'>
        <h1>Do You Have Any Heavy Waste Types?</h1>
        <p>Select All That Apply</p>
        <ul>
            {wastesData.map((waste,index) => (
                <li 
               key={index} 
               onClick={() => handleSelect(waste)}
               className={isWasteSelected(waste) ? 'selected' : ''}
                >
                    {waste.title}
                </li>
            ))}
            <li>I don't Have Any</li>
        </ul>
         <div className='btns'>
            <button className='btn back' onClick={handlePrev}>Back</button>
            <button className='btn next' onClick={() => handleDecision(wastesSelected)}>Continue</button>
        </div>
    </div>
  )
}

export default WasteTypeDrawer