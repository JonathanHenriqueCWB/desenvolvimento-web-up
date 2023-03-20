import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React from 'react'

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
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='/planos' element={<h1>Planos</h1>}/>
        <Route path='/sobre' element={<h1>Sobre</h1>}/>
        <Route path='/detalhes' element={<h1>Detalhes</h1>}/>
        <Route path='*' element={<h1>Página Não Encontrada!</h1>} />
      </Routes>
    </Router>
  )
}

export default App