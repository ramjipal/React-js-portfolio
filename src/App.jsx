import { useState, useEffect } from 'react'
import { Home, About, Resume, Footer, Projects, NavBar, Preloader, ScrollToTop} from './components/comp_index'


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import './style.css'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";


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
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}></div>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project" element={<Projects />} />
        {/* add route to project copy */}
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
