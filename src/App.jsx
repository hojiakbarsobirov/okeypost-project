import './App.css'
import Navbar from './Navbar'
import SectionPage from './SectionPage'
import { Routes, Route } from 'react-router-dom'
import SectionTwoPage from './SectionTwoPage'
import SkidkaPage from './SkidkaPage'
import SummaPage from './SummaPage'
import FooterPage from './FooterPage'
import Помощь from './Помощь'
import БонусыPage from './БонусыPage'
import БлогPage from './БлогPage'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<SectionPage/>}/>
      <Route path='/Как покупать' element={<SectionTwoPage/>}/>
      <Route path='/Распродажи' element={<SkidkaPage/>}/>
      <Route path='/Цены' element={<SummaPage/>}/>
      <Route path='/Помощь' element={<Помощь/>}/>
      <Route path='/Бонусы' element={<БонусыPage/>}/>
      <Route path='/Блог' element={<БлогPage/>}/>
    </Routes>
    <FooterPage/>
    </>
  )
}

export default App
