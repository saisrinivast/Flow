import React from 'react'
import Navbar from './Components/Navbar'
import "./App.css"
import Nodes from './Components/Nodes'
import {Routes,Route} from "react-router-dom"
import Run from './Components/Run'
import Secondpage from './Components/Secondpage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Run/>}/>
        <Route path='/secondpage' element={<Secondpage/>}/>
      </Routes>
    </div>
  )
}

export default App