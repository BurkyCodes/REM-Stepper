/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { wasteTypesArray } from "../../DummyData/wasteTypes";
import WasteType from "./WasteTypeCard";
import WasteTypeDrawer from "./WasteTypeDrawer";
import Notice from "./Notice";
import PlasterBoard from "./PlasterBoard";

const WasteTypesContainer = ({ handleNext, handlePrev}) => {
 const [openWasteIndex,setOpenWasteIndex] = useState(null);
 const [selectedWasteTypes,setSelectedWasteTypes] = useState([]);
 const [showDrawer, setShowDrawer] = useState(false);
 const [showNotice,setShowNotice] = useState(false);
 const [showPlasterBoard, setShowPlasterBoard] = useState(false);

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

const handleNextClick = () => {
  if (!showDrawer){
    setShowDrawer(true);
    return
  }
  handleNext();
}

const handleDrawerClose = () => {
  setShowDrawer(false);
  setShowNotice(true)
}

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
                {selectedWasteTypes.map((item,index) => (
                 <li key={index}>{item.title} {selectedWasteTypes.length === 2 && (<span>and</span>)} </li>
              
                ))}         
            </ul>
        </div>
        {selectedWasteTypes.length > 0 && (
            <div className='btns'>
            <button className='btn back'>Back</button>
            <button className='btn next' onClick={handleNextClick}>Continue</button>
        </div>
        )}
   
      {showDrawer && (
        <WasteTypeDrawer
        handlePrev={() => setShowDrawer(false)}
        handleDecision={(selected) => {
            setShowDrawer(false);
            if (selected.length > 0) {
              setShowNotice(true);
            } else {
              setShowPlasterBoard(true);
            }
          }}
         />
      )}
      {showNotice && (<Notice />)}
      
    {showPlasterBoard && ( <PlasterBoard />)}
    </div>
    </>
  )
}

export default WasteTypesContainer