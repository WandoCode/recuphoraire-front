import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../utils/AuthContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../style/LoginForm.css'

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001'

function LoginForm(props) {
  let navigate = useNavigate()
  const { logIn } = useContext(AuthContext)

  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post(BASE_URL + '/users/login', {
      username: username,
      password: password,
    })

    const loginIsOk = res.data.authenticate
    if (loginIsOk === 'true') {
      logIn(username)
      navigate('/horaires')
    }
  }

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center login__title">Connexion</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4  align-self-center">
          <form onSubmit={handleSubmit}>
            <label className="form-label" htmlFor="username">
              Nom
            </label>
            <input
              className="form-control"
              name="username"
              id="username"
              type="text"
              onChange={handleUsername}
            />

            <label className="form-label" htmlFor="password">
              Mot de passe
            </label>
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              onChange={handlePassword}
            />

            <input
              type="submit"
              className="form-control btn btn-primary"
              value="Se connecter"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
