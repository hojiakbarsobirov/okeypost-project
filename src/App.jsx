import './App.css'
import Navbar from './Navbar'
import SectionPage from './SectionPage'
import { Routes, Route } from 'react-router-dom'
import SectionTwoPage from './SectionTwoPage'
import SkidkaPage from './SkidkaPage'
import SummaPage from './SummaPage'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<SectionPage/>}/>
      <Route path='/Как покупать' element={<SectionTwoPage/>}/>
      <Route path='/Распродажи' element={<SkidkaPage/>}/>
      <Route path='/Цены' element={<SummaPage/>}/>
    </Routes>
    </>
  )
}

export default App
