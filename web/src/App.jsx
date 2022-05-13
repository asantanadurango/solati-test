import Home from './components/Home/index.jsx'
import Navbar from './components/Navbar/index.jsx'
import Records from './components/Records/index.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/records' element={<Records />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
