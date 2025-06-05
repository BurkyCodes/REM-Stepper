import { useState } from "react"
import DeliveryDate from "./DeliveryDate"
import CollectionDate from "./CollectionDate"

const DeliveryDateContainer = ({handleNext,handlePrev}) => {
    const [openDate,setOpenDate] = useState(null)
  return (
    <div className="delivery-date-container"> 
        <h1>Choose Your Delivery Date</h1>
        <p>Select your preferred skip delivery date. We'll aim to deliver between 7am and pm on your choosen day.</p>
        <div className="deliverydate-wrapper">
            <div className="top">
            <h1>Delivery Date</h1>
            {/* <button className="change-btn">
                change
                <i className="fa fa-chevron-down"></i>
                </button> */}
            </div>

            <DeliveryDate />
        </div>
        <div className="collectiondate-wrapper">
            <div className="top">
            <h1>Collection Date</h1>
            {/* <button className="change-btn">
                change
                <i className="fa fa-chevron-down"></i>
            </button> */}
            </div>
            <CollectionDate />
            <p >Please select a collection date at least one day after delivery date</p>
        </div>
        <div className='btns'>
            <button className='btn back' onClick={handlePrev}>Back</button>
            <button className='btn next' onClick={handleNext}>Continue to Payment</button>
        </div>
    </div>
  )
}

export default DeliveryDateContainer