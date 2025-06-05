import React from 'react'

const WasteType = ({onSelect,waste,selected,open,onMoreClick}) => {

  return (
    <div 
       onClick={() => onSelect(waste)} 
       className={`waste ${selected ? 'selected' : ''}`}>
        <div className='top'>
        <i className={waste.icon}></i>
        <h3>{waste.title}</h3>
        </div>
        <button className='more' onClick={(e) => {
        e.stopPropagation(); 
        onMoreClick();
      }}>
        {open ? 'less' : 'more'}
      </button>

      {open && (
        <p className="description">
          {waste.description}
        </p>
      )}
    </div>
  )
}

export default WasteType