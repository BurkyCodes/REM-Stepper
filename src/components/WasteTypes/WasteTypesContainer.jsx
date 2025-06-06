/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { wasteTypesArray } from "../../DummyData/wasteTypes";
import WasteType from "./WasteTypeCard";


const WasteTypesContainer = ({ handleNext, handlePrev}) => {
 const [openWasteIndex,setOpenWasteIndex] = useState(null);
 const [selectedWasteTypes,setSelectedWasteTypes] = useState([]);
 

const handleSelect = (waste) => {
  setSelectedWasteTypes((prev) => {
    const isSelected = prev.some((item) => item.index === waste.index);
    if (isSelected) {
      return prev.filter((item) => item.index !== waste.index); 
    } else {
      return [...prev, waste]; 
    }
  });
};


const handleMoreClick = (index) => {
  setOpenWasteIndex(prev => prev === index ? null : index);
}

// console.log("wastetypes")


  return (
    <>
    <div className="waste-types-container">
        <h1 className="waste-h1">What type of waste are you disposing of?</h1>
        <p className="info"><FaInfoCircle /> Select all that apply</p>
        <ul className="waste-wrapper"> 
            {wasteTypesArray.map((waste,index) => (
                <WasteType 
                key={index}
                onMoreClick={() => handleMoreClick(waste.index)}
                waste={waste} 
                onSelect={handleSelect}
                open={openWasteIndex === waste.index}
                selected={selectedWasteTypes.some(item => item.index === waste.index)} 
                />
            ))}
        </ul>
        <div className="selected-waste-types">
           <ul>
           {selectedWasteTypes.slice(0, 2).map((item, index) => (
             <li key={index}>
               {item.title}
               {index === 0 && selectedWasteTypes.length === 2 && ' and '}
               {index === 0 && selectedWasteTypes.length > 2 && ', '}
             </li>
           ))}
           {selectedWasteTypes.length > 2 && (
             <li>
               and {selectedWasteTypes.length - 2} more
             </li>
           )}
         </ul>
        </div>
        {selectedWasteTypes.length > 0 && (
            <div className='btns'>
            <button className='btn back'>Back</button>
            <button className='btn next' onClick={handleNext}>Continue</button>
        </div>
        )}
   
    
    
    </div>
    </>
  )
}

export default WasteTypesContainer