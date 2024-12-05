// ProjectItem.js
import React from 'react';
import ProjectLinks from './ProjectLinks';
import ProjectTechnologies from './ProjectTechnologies';

const ProjectItem = ({ project }) => {
    return (
        <li className="project-item">
            <a href={project.linkPag || '#'} className="project-image-link">
                <img src={project.imagen} alt={project.Nombre} className="project-image" />
            </a>
            <h2 className="project-name">{project.Nombre}</h2>
            <p className="project-description">{project.descripcion}</p>
            <ProjectLinks linkRepo={project.linkRepo} linkRepoBK={project.linkRepoBK} />
            <ProjectTechnologies tecnologias={project.tecnologias} />
        </li>
    );
};

export default ProjectItem;