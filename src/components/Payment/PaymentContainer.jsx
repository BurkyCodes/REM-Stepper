import React from 'react'

const PaymentContainer = ({handlePrev}) => {
  return (
    <div className='payement-container'>
        <h1>Payment</h1>
        <button className='btns'>
          <button onClick={handlePrev} className='back-btn'>back</button>
        </button>
    </div>
  )
}

export default PaymentContainer