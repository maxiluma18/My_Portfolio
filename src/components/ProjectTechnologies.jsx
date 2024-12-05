// ProjectTechnologies.js
import React from 'react';
import TechnologySection from './TechnologySection';

const ProjectTechnologies = ({ tecnologias }) => {
    return (
        <div className="project-technologies">
            <h3 className="technologies-title">Tecnologías:</h3>
            <div className='container-tech-flex'>
                {tecnologias.front && tecnologias.front.length > 0 && (
                    <TechnologySection title="Frontend" technologies={tecnologias.front} />
                )}
                {tecnologias.back && tecnologias.back.length > 0 && (
                    <TechnologySection title="Backend" technologies={tecnologias.back} />
                )}
                {tecnologias.tools && tecnologias.tools.length > 0 && (
                    <TechnologySection title="Herramientas" technologies={tecnologias.tools} />
                )}
            </div>
        </div>
    );
};

export default ProjectTechnologies;