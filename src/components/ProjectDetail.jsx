import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../assets/Projects.json';
import ProjectItem from './ProjectItem';
import NotFound from './NotFounds';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find((proj) => proj.id === parseInt(id));

    if (!project) {
        return <NotFound />;
    }

    return (
        <div>
            <ProjectItem project={project} />
        </div>
    );
};

export default ProjectDetail;