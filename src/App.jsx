import { useEffect, useRef, useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AddCaption from './AddCaption'
import Home from './Home'

function App() {

  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addCaption" element={<AddCaption />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
