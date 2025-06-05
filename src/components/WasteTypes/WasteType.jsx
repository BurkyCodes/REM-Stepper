import React from 'react'

const WasteType = ({onSelect,waste,selected}) => {

  return (
    <div 
       onClick={() => onSelect(waste)} 
       className={`waste ${selected ? 'selected' : ''}`}>
        <div className='top'>
        <i className={waste.icon}></i>
        <h3>{waste.title}</h3>
        </div>
        <button className='more'>more</button>
    </div>
  )
}

export default WasteType