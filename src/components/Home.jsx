import React from "react";
import "./Home.css"; // Agrega estilos aquí
import technologies from "../assets/tech.json";

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">DESARROLLADOR WEB FULL STACK</h1>
            <section className="about-me">
                <p>
                    Soy desarrollador web full stack apasionado por la tecnología y la creación de soluciones digitales.
                    Tengo experiencia en el desarrollo de aplicaciones utilizando tecnologías como React y Node.js,
                    lo que me permite trabajar tanto en el frontend como en el backend.
                    Me encanta enfrentar desafíos y aprender nuevas habilidades, buscando siempre mejorar mis capacidades
                    y contribuir a proyectos innovadores que impacten positivamente a los usuarios.
                </p>
            </section>
            <section className="technologies">
                <h2 className="h2">Tecnologías</h2>
                <div className="tech-grid">
                    {technologies.map((tech, index) => (
                        <div key={index} className="tech-item">
                            <img
                                src={tech.logo}
                                alt={tech.name}
                                className="tech-logo"
                            />
                            <span className="tech-name">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
