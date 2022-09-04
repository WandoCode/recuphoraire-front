import { NavLink } from 'react-router-dom'
import '../style/Layout.css'

function Layout(props) {
  const title = props.title || 'Horaire Delta'
  return (
    <div className="fluid g-0">
      <header className="bg-primary">
        <h1 className="layout__title">{title}</h1>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li class="nav-item">
                  <NavLink to="/" activeClassName="active" className="nav-link">
                    Horaires
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    to="/out"
                    activeClassName="active"
                    className="nav-link"
                  >
                    Congés
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div>
        <main>{props.children}</main>
      </div>
    </div>
  )
}

export default Layout
