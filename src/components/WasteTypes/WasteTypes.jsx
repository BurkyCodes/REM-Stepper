/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { wasteTypesArray } from "../../DummyData/wasteTypes";
import WasteType from "./WasteType";

const WasteTypes = () => {
 const [openWasteIndex,setOpenWasteIndex] = useState(null);
 const [selectedWasteTypes,setSelectedWasteTypes] = useState([]);
 console.log(selectedWasteTypes)

const handleSelect = (waste) => {
  setSelectedWasteTypes((prev) => {
    const isSelected = prev.some((item) => item.index === waste.index);
    if (isSelected) {
      return prev.filter((item) => item.index !== waste.index); // Deselect
    } else {
      return [...prev, waste]; // Select
    }
  });
};

const handleMoreClick = (index) => {
  setOpenWasteIndex(prev => prev === index ? null : index);
}


  return (
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
                {selectedWasteTypes.map((item,index) => (
                 <li key={index}>{item.title} {selectedWasteTypes.length === 2 && (<span>and</span>)} </li>
              
                ))}         
            </ul>
        </div>
     <div className='btns'>
            <button className='btn back'>Back</button>
            <button className='btn next'>Continue</button>
        </div>
    </div>
  )
}

export default WasteTypes