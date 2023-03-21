import { Link } from 'react-router-dom'
import React from "react";
import './Header.css'

// Obejto com estilo
const style ={ "backgroundColor" : "#222", "marginBottom" : "50px", "padding" : "20px" }

const Header = props => {
    return (
    <ul class="nav justify-content-center" style={style}>
        <li class="nav-item">
            <Link className='nav-link' to='/'>HOME</Link>        
        </li>
        <li class="nav-item">
            <Link className='nav-link' to='/planos'>PLANOS</Link>           
        </li>
        <li class="nav-item">
            <Link className='nav-link' to='/sobre'>SOBRE</Link>
        </li>
    </ul>
    )
}

export default Header