import React from "react";
import './Footer.css'
import { useLocation } from 'react-router-dom';

const style ={ "backgroundColor" : "#222", "marginTop" : "50px" }

const Footer = props => {
    const location = useLocation();
    return (
        <nav style={style}>
            <ul className="nav nav-pills nav-fill container" style={{padding: "10px"}}>                
                <li className="nav-item">
                    <a className="nav-link disabled">Developed by Jonathan Henrique Alves de Lima</a>
                    <div style={{color: "#ccc"}}>Você está em: {location.pathname}</div>
                </li>
            </ul>
        </nav>
    )
}

export default Footer