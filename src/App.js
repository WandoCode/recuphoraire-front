import DataManager from './factories/DataManager.js'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

function App() {
  const [datas, setDatas] = useState({})
  const [holidaysDatas, setHolidaysDatas] = useState({})
  const dataManager = new DataManager()

  useEffect(() => {
    const fetchDatas = async () => {
      const datasRaw = await dataManager.getRawDatasAllSheets()
      dataManager.createStructuredDatas(datasRaw)

      const formattedDatas = dataManager.formattedDatas
      setDatas(formattedDatas)

      const holidays = dataManager.holidays
      setHolidaysDatas(holidays)
    }
    fetchDatas()
  }, [])

  return (
    <div className="App">
      <Outlet context={{ datas, setDatas, holidaysDatas, setHolidaysDatas }} />
    </div>
  )
}
// TODO: ajouter les congés

export default App
