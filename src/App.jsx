import { useState, useEffect } from 'react'

import {Preloader, NavBar, ScrollToTop} from '../src/components/comp_index'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import './App.css'
import './style.css'

function App() {
  const [load, updateLoad] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() =>{
      updateLoad(false)
    }, 1200);

    return () => clearTimeout(timer)
  }, [])
  return (
    <Router>
      <Preloader load = {load}/>
      <div className='App' id = {load ? "no-scroll": "scroll"}></div>
      <NavBar/>
      <ScrollToTop/>
      <Routes>
      <Route path="/" element={<Home />} />

      </Routes>
      
    </Router>
  )
}

export default App
