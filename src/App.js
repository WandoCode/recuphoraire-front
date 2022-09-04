import DataManager from './factories/DataManager.js'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

function App() {
  const [datas, setDatas] = useState({})
  const dataManager = new DataManager()

  useEffect(() => {
    const fetchDatas = async () => {
      const datasRaw = await dataManager.getRawDatasAllSheets()
      dataManager.createStructuredDatas(datasRaw)

      const formattedDatas = dataManager.formattedDatas
      setDatas(formattedDatas)
    }
    fetchDatas()
  }, [])

  return (
    <div className="App">
      <Outlet context={[datas, setDatas]} />
    </div>
  )
}
// TODO: ajouter les congés

export default App
