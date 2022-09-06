import DataManager from './factories/DataManager.js'
import { useEffect, useState, useRef } from 'react'
import { Outlet } from 'react-router-dom'

function App() {
  const renderAfterCalled = useRef(false)
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

    // Prevent from calling multiples times to fetch from API with strict-mode (.holidays's values are doubled in that case)

    if (!renderAfterCalled.current) {
      fetchDatas()
    }
    renderAfterCalled.current = true
  }, [])

  return (
    <div className="App">
      <Outlet context={{ datas, setDatas, holidaysDatas, setHolidaysDatas }} />
    </div>
  )
}

export default App
