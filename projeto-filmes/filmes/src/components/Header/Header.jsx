import { Link } from 'react-router-dom'
import React from "react";
import './Header.css'
import { useLocation } from 'react-router-dom';

// Obejto com estilo
const style ={ "backgroundColor" : "#222", "padding" : "20px" }

const Header = props => {

    const location = useLocation()
    console.log('voce está em:' + location.pathname)

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

        {
            location.pathname == '/cadastrar' ? <li></li> : <li className="nav-item"> <Link className='nav-link' to='/cadastrar' style={{color: "#fff"}}>CADASTRAR</Link></li> 
        }
        
    </ul>
    )
}

export default Header