/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { wasteTypesArray } from "../../DummyData/wasteTypes";
import WasteType from "./WasteType";

const WasteTypes = () => {
 const [openmore,setOpenMore] = useState(false);
 const [selectedWasteTypes,setSelectedWasteTypes] = useState([]);

 useEffect(() => {

 },[])
  return (
    <div className="waste-types-container">
        <h1 className="waste-h1">What type of waste are you disposing of?</h1>
        <p className="info"><FaInfoCircle /> Select all that apply</p>
        <ul className="waste-wrapper"> 
            {wasteTypesArray.map((waste,index) => (
                <WasteType waste={waste} key={index} />
            ))}
        </ul>
     <div className='btns'>
            <button className='btn back'>Back</button>
            <button className='btn next'>Continue</button>
        </div>
    </div>
  )
}

export default WasteTypes