

const SkipSize = ({skip}) => {
  return (
    <div className="skip-card">
      <div className="skip-detail">
        <h1>{skip.size} Yard Skip</h1>
        <p>{skip.hire_period_days} day hire period</p>
       
        </div>  
        <span className="yards">{skip.size} Yards</span>
         <h3 className="price">£{skip.price_before_vat}</h3>
        <div className="image-holder">
          <img src={skip.picture} alt="" />
        </div>
        <button className="select-skip">Select Skip</button>
    </div>
  )
}

export default SkipSize