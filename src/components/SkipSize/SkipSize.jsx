

const SkipSize = ({skip,onSelect,isSelected}) => {
  return (
    <div 
    className={`skip-card ${isSelected ? 'selected' : ''}`}>
      <div className="skip-detail">
        <h1  className={`${isSelected ? 'selected' : ''}`}>{skip.size} Yard Skip</h1>
        <p>{skip.hire_period_days} day hire period</p>
       
        </div>  
        <span className="yards">{skip.size} Yards</span>
         <h3 className="price">£{skip.price_before_vat}</h3>
         {skip.allowed_on_road === false && (<span className="not-allowed">
          <i class="fa-solid fa-triangle-exclamation"></i> Not Allowed on The Road
         </span>)}
        <div className="image-holder">
          <img src={skip.picture} alt="" />
        </div>
        <button 
        onClick={onSelect}
        className={`select-skip ${isSelected ? 'selected' : ''}`}
       >{isSelected ? 'Selected' : 'Select Skip'}</button>
    </div>
  )
}

export default SkipSize