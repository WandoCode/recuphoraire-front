import uniqid from 'uniqid'
import Table from 'react-bootstrap/Table'
import '../style/tableHoraires.css'
function TableHoraire(props) {
  const dataName = props.datas[props.name] || []

  const orderedDataName = dataName.sort((a, b) => {
    return a.date > b.date ? 1 : -1
  })

  const rows = () => {
    return orderedDataName.map((item) => {
      return (
        <tr className="table-light" key={uniqid()}>
          <th>{item.date.toLocaleDateString()}</th>
          <td>{item.startHour}</td>
          <td>{item.endHour}</td>
          <td>{item.room}</td>
        </tr>
      )
    })
  }

  return (
    <div className="row justify-content-center">
      <div className="col-lg-5">
        <Table striped hover>
          <thead>
            <tr className="table-dark">
              <th>Date</th>
              <th>Début</th>
              <th>Fin</th>
              <th>Salle</th>
            </tr>
          </thead>
          <tbody id="horaire-table-body">{rows()}</tbody>
        </Table>
      </div>
    </div>
  )
}

export default TableHoraire
