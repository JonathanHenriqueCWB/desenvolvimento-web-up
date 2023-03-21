import React from "react";
import './Footer.css'

const style ={ "backgroundColor" : "#222", "marginTop" : "50px" }

const Footer = props => {
    return (
        <nav style={style}>
            <ul class="nav nav-pills nav-fill container" style={{padding: "10px"}}>                
                <li class="nav-item">
                    <a class="nav-link disabled">Developed by Jonathan Henrique Alves de Lima</a>
                </li>
            </ul>
        </nav>
    )
}

export default Footer