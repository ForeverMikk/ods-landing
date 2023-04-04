import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './components/Home/Home'
import TermsConditions from './components/TermsConditions/TermsConditions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/terms' element={<TermsConditions />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
