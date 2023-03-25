import {Routes, Route} from 'react-router-dom'

import Home from './pages/home'
import Planos from './pages/planos'
import Sobre from './pages/sobre'
import Detalhes from './pages/detalhes'


export default function ConfigRoutes(){
    return (
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/planos' element={<Planos></Planos>}/>
          <Route path='/sobre' element={<Sobre></Sobre>}/>
          <Route path='/detalhes/:id' element={<Detalhes></Detalhes>}/>
          <Route path='*' element={<h1>Página Não Encontrada!</h1>} />
        </Routes>
    )
}