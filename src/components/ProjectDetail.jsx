// ProjectDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../assets/Projects.json'; // Asegúrate de importar tus datos
import ProjectItem from './ProjectItem'; // Importa el componente ProjectItem
import NotFound from './NotFounds';

const ProjectDetail = () => {
    const { id } = useParams(); // Obtener el ID del proyecto de la URL
    const project = projectsData.find((proj) => proj.id === parseInt(id)); // Buscar el proyecto por ID

    if (!project) {
        return <NotFound />; // Manejo de error si no se encuentra el proyecto
    }

    return (
        <div>
            <ProjectItem project={project} /> {/* Renderiza el componente ProjectItem */}
        </div>
    );
};

export default ProjectDetail;