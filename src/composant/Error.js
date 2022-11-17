import { Link } from 'react-router-dom'

function Error(props) {
  return (
    <div className="error">
      You should not be here! Go back to <Link to="/login">login</Link>
    </div>
  )
}

export default Error
