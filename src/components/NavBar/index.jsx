import React from 'react'
import ReactLogo from '../../assets/reactlogo.png'

export const NavBar = () => {
    return(
        <nav className="NavBar">
            <ul className='NavBar-ul'>
                <div className="NavBar-titulo">
                    <img src={ReactLogo}  width="35px" height="30px" alt="reactLogo" className='NavBar-logo'/><b>T</b>ecno<b>S</b>oft
                </div>
                <li className="NavBar-enlace"><a href="">Inicio</a></li>
                <li className="NavBar-enlace"><a href="">Productos</a></li>
                <li className="NavBar-enlace"><a href="">Quienes somos?</a></li>
                <li className="NavBar-enlace"><a href="">Contactanos</a></li>
            </ul>
        </nav>
    )
}
export default NavBar;