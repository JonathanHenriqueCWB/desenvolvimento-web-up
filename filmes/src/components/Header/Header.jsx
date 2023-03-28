import { Link } from 'react-router-dom'
import React from "react";
import './Header.css'

// Obejto com estilo
const style ={ "backgroundColor" : "#222", "padding" : "20px" }

const Header = props => {
    return (
    <ul className="nav justify-content-center" style={style}>
        <li className="nav-item">
            <Link className='nav-link' to='/' style={{color: "#fff"}}>HOME</Link>        
        </li>
        <li className="nav-item">
            <Link className='nav-link' to='/planos' style={{color: "#fff"}}>PLANOS</Link>           
        </li>
        <li className="nav-item">
            <Link className='nav-link' to='/sobre' style={{color: "#fff"}}>SOBRE</Link>
        </li>
    </ul>
    )
}

export default Header