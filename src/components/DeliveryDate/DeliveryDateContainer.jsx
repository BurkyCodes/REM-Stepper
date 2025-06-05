import { useState } from "react"
import DeliveryDate from "./DeliveryDate"

const DeliveryDateContainer = ({handleNext,handlePrev}) => {
    const [openDate,setOpenDate] = useState(null)
  return (
    <div className="delivery-date-container"> 
        <h1>Choose Your Delivery Date</h1>
        <p>Select your preferred skip delivery date. We'll aim to deliver between 7am and pm on your choosen day.</p>
        <div className="deliverydate-wrapper">
            <h1>Delivery Date</h1>
            <DeliveryDate />
            <button>change</button>
        </div>
        <div className="collectiondate-wrapper">
            <h1>Collection Date</h1>
            <DeliveryDate />
            <button>change</button>
        </div>
    </div>
  )
}

export default DeliveryDateContainer