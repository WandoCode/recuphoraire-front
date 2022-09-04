import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import Layout from './Layout'
import Select from './Select'
import TableHoraire from './TableHoraire'

function Horaires(props) {
  const [datas, setDatas] = useOutletContext()
  const [names, setNames] = useState([])
  const [currentName, setCurrentName] = useState('')

  useEffect(() => {
    if (datas) {
      const newNames = Object.keys(datas)
      setNames(newNames)
    }
  }, [datas])

  const getName = (name) => {
    setCurrentName(name)
  }

  return (
    <div className="horaires">
      <Layout title="Horaire Delta">
        <Select names={names} getName={getName} />
        <TableHoraire name={currentName} datas={datas} />
      </Layout>
    </div>
  )
}

export default Horaires
