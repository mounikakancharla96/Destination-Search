import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props

  const {imgUrl, name} = destinationDetails

  return (
    <li className="destination-list">
      <img src={imgUrl} className="item-img" alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
