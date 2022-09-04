import Layout from './Layout'
import { useEffect, useState } from 'react'
import Select from './Select.js'

function Conge() {
  const [datas, setDatas] = useState({})

  const [names, setNames] = useState([])
  const [currentName, setCurrentName] = useState('')

  useEffect(() => {
    const newNames = Object.keys(datas)
    setNames(newNames)
  }, [datas])

  const getName = (name) => {
    setCurrentName(name)
  }
  return (
    <div className="Conge">
      <Layout title="Congés">
        <Select names={names} getName={getName} />
      </Layout>
    </div>
  )
}

export default Conge
