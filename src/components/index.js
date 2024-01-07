import './index.css'

const Listprofile = props => {
  const {listDetails, deletelist} = props
  const {id, title, logoUrl, timeAccessed, domainUrl} = listDetails
  const onDelete = () => {
    deletelist(id)
  }
  return (
    <li className="listcontainer">
      <div className="f">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="listlogo" />
        <p className="title">{title}</p>
        <p className="domainurl">{domainUrl}</p>
      </div>
      <button
        className="button"
        type="button"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          alt="delete"
          className="delete-button"
        />
      </button>
    </li>
  )
}

export default Listprofile
