import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
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
      navigate('/')
    }
  }

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center login__title">Connexion</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4  align-self-center">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" onChange={handleUsername} />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" onChange={handlePassword} />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="submit"
                className="btn btn-primary"
                value="Se connecter"
              />
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
