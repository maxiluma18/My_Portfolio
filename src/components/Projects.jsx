// Projects.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../assets/Projects.json';
import './Projects.css';
export const Projects = () => {
    return (
        <div className="projects-container">
            <div className="projects-list">
                {projectsData.map((project) => (
                    <Link key={project.id} to={`/projects/${project.id}`}>
                        <img src={project.imagen} alt={project.Nombre} className="project-image" />
                    </Link>
                ))}
            </div>
        </div>
    );
};
