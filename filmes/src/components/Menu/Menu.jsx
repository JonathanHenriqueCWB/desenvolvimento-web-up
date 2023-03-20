import React from "react";
import './Menu.css'

const style ={ 
    "backgroundColor" : "#222",
    "marginBottom" : "50px",
    "padding" : "20px"
}

const Menu = props => {
    return (
    <ul class="nav justify-content-center" style={style}>
        <li class="nav-item">
            <a class="nav-link" href="#">HOME</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">PLANOS</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">SOBRE</a>
        </li>
    </ul>
    )
}

export default Menu