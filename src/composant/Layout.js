import { NavLink } from 'react-router-dom'
import '../style/Layout.css'

function Layout(props) {
  const title = props.title || 'Horaire Delta'
  const activeClassName = 'nav-link active'
  return (
    <div className="fluid g-0">
      <header className="bg-primary">
        <h1 className="layout__title">{title}</h1>
        <nav class="layout__nav">
          <ul className="nav__list ">
            <li className="nav__item">
              <NavLink
                to="/horaires"
                className={({ isActive }) =>
                  isActive ? activeClassName : 'nav-link'
                }
              >
                Horaires
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/out"
                className={({ isActive }) =>
                  isActive ? activeClassName : 'nav-link'
                }
              >
                Congés
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/logout"
                className={({ isActive }) =>
                  isActive ? activeClassName : 'nav-link'
                }
              >
                Déconnexion
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <main>{props.children}</main>
      </div>
    </div>
  )
}

export default Layout
