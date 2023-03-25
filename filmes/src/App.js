import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import './App.css'

// Components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// Rotas
import ConfigRoutes from './configRoutes'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header></Header>
        <ConfigRoutes />
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App