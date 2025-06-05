import React from 'react'

const PermtCheck = ({permit,isSelected,onClick}) => {
  return (
    <div 
    onClick={onClick}
    className={`permit-check-card ${isSelected ? 'selected' : ''}`}
    >
        <div 
        className="top">
            <i 
            className={`${permit.icon} ${isSelected ? 'selected' : ''}`}
            ></i>
        <div className="left">
        <h1  className={`h1-card ${isSelected ? 'selected' : ''}`}>
          {permit.title}</h1>
        <p className={`sub-title ${isSelected ? 'selected' : ''}`}>{permit.subTitle}</p>
        </div>
        </div>
        <p 
         className={`permit-desc ${isSelected ? 'selected' : ''}`}
      >
            {permit.description}
        </p>
    </div>
  )
}

export default PermtCheck