import React from 'react'

const WasteType = ({waste}) => {
  return (
    <div className='waste'>
        <div className='top'>
        <i className={waste.icon}></i>
        <h3>{waste.title}</h3>
        </div>
        <button className='more'>more</button>
    </div>
  )
}

export default WasteType