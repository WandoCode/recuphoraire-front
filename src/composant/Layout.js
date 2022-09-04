import { NavLink } from 'react-router-dom'
import '../style/Layout.css'

function Layout(props) {
  const title = props.title || 'Horaire Delta'
  const activeClassName = 'nav-link active'
  return (
    <div className="fluid g-0">
      <header className="bg-primary">
        <h1 className="layout__title">{title}</h1>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <NavLink
                    to="/horaires"
                    className={({ isActive }) =>
                      isActive ? activeClassName : 'nav-link'
                    }
                  >
                    Horaires
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/out"
                    className={({ isActive }) =>
                      isActive ? activeClassName : 'nav-link'
                    }
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
