import Container from 'react-bootstrap/Container'
import '../style/Layout.css'

function Layout(props) {
  const title = props.title || 'Horaire Delta'
  return (
    <Container fluid className="g-0">
      <header className="bg-primary">
        <h1 className="layout__title">{title}</h1>
        <nav></nav>
      </header>
      <Container>
        <main>{props.children}</main>
      </Container>
    </Container>
  )
}

export default Layout
