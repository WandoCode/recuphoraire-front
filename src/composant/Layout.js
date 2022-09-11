import { NavLink } from 'react-router-dom'
import '../style/Layout.css'
import burgerMenu from '../asset/burger-menu.svg'
import close from '../asset/close.svg'

function Layout(props) {
  const title = props.title || 'Horaire Delta'
  const activeClassName = 'nav-link active'

  const handleBurgerBtn = (e) => {
    toggleNavVisible()
  }

  const handleCloseBtn = () => {
    toggleNavVisible()
  }

  const toggleNavVisible = () => {
    const navList = document.querySelector('.nav__list__container')
    const closeBtn = document.querySelector('.close')
    navList.style.display === 'inline-block'
      ? (navList.style.display = 'none')
      : (navList.style.display = 'inline-block')

    closeBtn.style.display === 'inline-block'
      ? (closeBtn.style.display = 'none')
      : (closeBtn.style.display = 'inline-block')
  }

  return (
    <div className="fluid g-0">
      <header className="bg-primary">
        <h1 className="layout__title">{title}</h1>
        <nav className="layout__nav">
          <img
            className="btn-burger"
            src={burgerMenu}
            alt="Menu button"
            onClick={handleBurgerBtn}
          />

          <div className="nav__list__container">
            <img
              className="close"
              src={close}
              alt="close button"
              onClick={handleCloseBtn}
            />
            <ul className="nav__list">
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
