import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React from 'react'

// Pages
import Home from './pages/home'
import Planos from './pages/planos'
import Sobre from './pages/sobre'

function App() {
  return (
    <Router>
      {/* Criando links para acessar as rotas definidas abaixo */}
      <div>
        <ul>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/planos'>PLANOS</Link></li>
          <li><Link to='/sobre'>SOBRE</Link></li>
        </ul>
      </div>      
      {/* Definindo as rotas de aplicação */}
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/planos' element={<Planos></Planos>}/>
        <Route path='/sobre' element={<Sobre></Sobre>}/>
        <Route path='/detalhes' element={<h1>Detalhes</h1>}/>
        <Route path='*' element={<h1>Página Não Encontrada!</h1>} />
      </Routes>
    </Router>
  )
}

export default App