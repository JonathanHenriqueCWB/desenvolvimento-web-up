import {Routes, Route} from 'react-router-dom'

// Import PAGES
import Home from './pages/home'
import Detalhes from './pages/detalhes'
import Login from './pages/login'
import Carrinho from './pages/carrinho'
import Usuario from './pages/usuario'


export default function ConfigRoutes(){
    return (
        <div style={{minHeight: '68vh'}}>

        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/detalhes/:codigo' element={<Detalhes></Detalhes>}/>
          <Route path='/login' element={<Login></Login>}/>
          <Route path='/carrinho/:codigo' element={<Carrinho></Carrinho>} />
          <Route path='/usuario' element={<Usuario></Usuario>} />
          <Route path='*' element={<h1>Página Não Encontrada!</h1>} />
        </Routes>
        </div>
    )
}
// FLUXO DO PROGRAMA
    // arquivo de configrção das rotas
        // HOME: page home -> component home -> component cards
        // DETALHES: component card -> page detalhes -> componente detalhes 