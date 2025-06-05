import React from 'react'
import { skipsizedata } from '../../DummyData/skipSize'
import SkipSize from './SkipSize'


const SkipSizeContainer = () => {
  return (
    <div className='skip-sizecontainer'>
      <div>
        <h1>Choose Your Skip Size</h1>
        <p>Select the skip size that bestssuits your needs</p>
        </div>
        <ul className='skip-container'>
          {skipsizedata.map((skip,index) => (
          <SkipSize key={index} skip={skip} />
          ))}
        
        </ul>
    </div>
  )
}

export default SkipSizeContainer