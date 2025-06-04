import React from 'react'
import Progress from '../components/Progress'
import Content from '../components/Content'

const Steps = () => {
  return (
    <>
    <div className='layout-container'>
      <div className='progress-div'>
    <Progress />
      </div>
      <div className='content-div'>
    <Content />
      </div>
    </div>
    </>
  )
}

export default Steps