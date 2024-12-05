import './Footer.css';
import footerLinks from "../assets/Social.json"

export const Footer = () => {
    return (
        <footer>
            <ul>
                {footerLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.link} target="_blank" rel="noopener noreferrer">
                            <img src={link.imagen} alt={link.nombre} />
                        </a>
                    </li>
                ))}
                <li>
                    <a href="/src/assets/Maximiliano Lucas Martinez - CV.pdf" download className="nav-item">CV</a>
                </li>
            </ul>
            <p>&quot;La confianza transforma las inseguridades en fortalezas&quot;</p>
        </footer>
    );
}