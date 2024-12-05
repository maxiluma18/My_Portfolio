import { NavLink } from "react-router-dom";
import './Nav.css'; // Asegúrate de importar el archivo CSS

export const Nav = () => {
    return (
        <nav className="navbar">
            <a href="/" className="logo">
                <img src="/src/images/MM.png" alt="LOGO MM" />
            </a>
            <ul className="nav-links">
                <li><NavLink to="projects" className="nav-item" activeClassName="active">Proyectos</NavLink></li>
                <li><NavLink to="contact" className="nav-item" activeClassName="active">Contacto</NavLink></li>
            </ul>
        </nav>
    );
}