import {Routes, Route} from 'react-router-dom'

// Import PAGES
import Home from './pages/home'
import Detalhes from './pages/detalhes'
import Login from './pages/login'


export default function ConfigRoutes(){
    return (
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/detalhes/:codigo' element={<Detalhes></Detalhes>}/>
          <Route path='/login' element={<Login></Login>}/>
          <Route path='*' element={<h1>Página Não Encontrada!</h1>} />
        </Routes>
    )
}
// FLUXO DO PROGRAMA
    // arquivo de configrção das rotas
        // HOME: page home -> component home -> component cards
        // DETALHES: component card -> page detalhes -> componente detalhes 