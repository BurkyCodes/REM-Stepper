

const SkipSize = ({skip}) => {
  return (
    <div className="skip-card">
      <img src={skip.picture} alt="" />
      <div className="skip-detail">
        <h1>{skip.title}</h1>
        <p>{skip.description}</p>
        <h3 className="price">{skip.price}</h3>
        </div>  
        <span className="yards">{skip.yards}</span>
        <button className="select">Select this Skip</button>
    </div>
  )
}

export default SkipSize