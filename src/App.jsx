import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './components/Home/Home'
import TermsConditions from './components/TermsConditions/TermsConditions'
import Form from './components/Form/Form'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/terms' element={<TermsConditions />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
