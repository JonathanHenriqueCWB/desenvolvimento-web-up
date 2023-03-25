import { Link } from 'react-router-dom'
import React from "react";
import './Header.css'

// Obejto com estilo
const style ={ "backgroundColor" : "#222", "padding" : "20px" }

const Header = props => {
    return (
    <ul className="nav justify-content-center" style={style}>
        <li className="nav-item">
            <Link className='nav-link' to='/'>HOME</Link>        
        </li>
        <li className="nav-item">
            <Link className='nav-link' to='/planos'>PLANOS</Link>           
        </li>
        <li className="nav-item">
            <Link className='nav-link' to='/sobre'>SOBRE</Link>
        </li>
    </ul>
    )
}

export default Header