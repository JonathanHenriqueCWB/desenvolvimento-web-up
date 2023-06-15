import {Routes, Route} from 'react-router-dom'

import Home from './pages/home'


export default function ConfigRoutes(){
    return (
        <Routes>
          <Route path='/' element={<Home></Home>}/> { /* root */ }
          <Route path='*' element={<h1>Página Não Encontrada!</h1>} />
        </Routes>
    )
}