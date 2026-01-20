// ProjectLink.js
import React from 'react';

const ProjectLink = ({ repo }) => (
    <a href={repo} target="_blank" rel="noopener noreferrer" className="project-link-text">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" style={{ marginRight: "5px", width: '20px', height: '20px', color: 'red' }} />
        <span>GitHub</span>
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" style={{ width: '20px', height: '20px' }} />
    </a>
);

export default ProjectLink;