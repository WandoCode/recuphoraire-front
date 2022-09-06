import Layout from './Layout'
import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import Select from './Select.js'
import uniqid from 'uniqid'

function Conge() {
  const { holidaysDatas } = useOutletContext()
  const [names, setNames] = useState([])
  const [currentName, setCurrentName] = useState('')

  useEffect(() => {
    if (holidaysDatas) {
      const newNames = Object.keys(holidaysDatas)
      setNames(newNames)
    }
  }, [holidaysDatas])

  const getName = (name) => {
    setCurrentName(name)
    console.log(name)
  }

  const items = () => {
    const dataName = holidaysDatas[currentName] || []
    return dataName.map((item) => {
      return <li key={uniqid()}>{item}</li>
    })
  }

  return (
    <div className="Conge">
      <Layout title="Congés">
        <Select names={names} getName={getName} />
        <div className="row justify-content-center  gx-0">
          <div className="col-lg-4 ">{items()}</div>
        </div>
      </Layout>
    </div>
  )
}

export default Conge
