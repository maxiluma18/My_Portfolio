// TechnologySection.js
import React from 'react';

const TechnologySection = ({ title, technologies }) => (
    <div className={`${title.toLowerCase()}-technologies`}>
        <h4 className={`${title.toLowerCase()}-title`}>{title}:</h4>
        <div className='container-tech'>
            {technologies.map((tech, idx) => (
                <div key={idx} className="technology-item">
                    <span className="technology-name">{tech.nombre}</span>
                    <img src={tech.imagen} alt={tech.nombre} className="technology-image" />
                </div>
            ))}
        </div>
    </div>
);

export default TechnologySection;