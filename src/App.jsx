import './App.css'
import Navbar from './Navbar'
import SectionPage from './SectionPage'
import { Routes, Route } from 'react-router-dom'
import SectionTwoPage from './SectionTwoPage'
import SkidkaPage from './SkidkaPage'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<SectionPage/>}/>
      <Route path='/two' element={<SectionTwoPage/>}/>
      <Route path='/skidka' element={<SkidkaPage/>}/>
    </Routes>
    </>
  )
}

export default App
