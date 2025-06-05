import React from 'react'

const Notice = ({handleNext}) => {
  return (
    <div className='notice-container'>
        <h1>How Much Heavy Waste Will You Put In The Skip?</h1>
        <div className='notice-info'>
            <div className="notice-top">
              <i class="fa-solid fa-triangle-exclamation"></i>
              <h2>Important Notice For Collection</h2>
            </div>
            <p>
                Our skip trucks have weight restrictions, we cannot lift 
                skips that weigh too much or transport them safely. Tell us how much heavyWaste
                you will be putting in your skip and we will tell you which size is available.
            </p>
        </div>
        <div className='percentage'>
            <div className='percent-card'>Under 5%</div>
            <div className='percent-card'>5 - 10%</div>
            <div className='percent-card'>10 - 20%</div>
            <div className='percent-card'>Over 20%</div>
        </div>
         <div className='btns'>
            <button className='btn back'>Back</button>
            <button className='btn next' onClick={handleNext}>Continue</button>
        </div>
    </div>
  )
}

export default Notice