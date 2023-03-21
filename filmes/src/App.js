import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import './App.css'

// Pages
import Home from './pages/home'
import Planos from './pages/planos'
import Sobre from './pages/sobre'
import Detalhes from './pages/detalhes'

// Components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='App'>
      <Router>
        {/* Criando links para acessar as rotas definidas abaixo */}
        {/* Os Links criado par acessar as rotas foram passados para o componente Menu/Header */}
        <Header></Header>
        
        {/* Definindo as rotas de aplicação */}
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/planos' element={<Planos></Planos>}/>
          <Route path='/sobre' element={<Sobre></Sobre>}/>
          <Route path='/detalhes/:id' element={<Detalhes></Detalhes>}/>
          <Route path='*' element={<h1>Página Não Encontrada!</h1>} />
        </Routes>

        {/* Footer da aplicação */}
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App