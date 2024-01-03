import './index.css'

const Listprofile = props => {
  const {eachsearch, deletelist} = props
  const {id, title, logoUrl, timeAccessed, domainUrl} = eachsearch
  const onDelete = () => {
    deletelist(id)
  }
  return (
    <li className="listcontainer">
      <div className="f">
        <h1 className="time">{timeAccessed}</h1>
        <img src={logoUrl} alt="img" className="listlogo" />
        <p className="title">{title}</p>
        <p className="domainurl">{domainUrl}</p>
      </div>
      <button className="button" type="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          alt="cross"
          className="delete-button"
        />
      </button>
    </li>
  )
}

export default Listprofile
