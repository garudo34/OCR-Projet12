import './keydatacard.css'

function KeyDataCard({ iconUrl, text, smalltext, unit }) {
  const formatNumber = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  return (
    <div className='mini-card'>
      <div className='mini-card-icon'>
        <img src={iconUrl} alt={smalltext} />
      </div>
      <div className='mini-card-content'>
        <div className='mini-card-text'>
          {formatNumber(text)}
          {unit}
        </div>
        <div className='mini-card-smalltext'>{smalltext}</div>
      </div>
    </div>
  )
}

export default KeyDataCard
