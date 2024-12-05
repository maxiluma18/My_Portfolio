// ProjectLinks.js
import React from 'react';
import ProjectLink from './ProjectLink';

const ProjectLinks = ({ linkRepo, linkRepoBK }) => {
    return (
        <div className="project-links">
            {Array.isArray(linkRepo) ? (
                linkRepo.map((repo, idx) => (
                    <ProjectLink key={idx} repo={repo} />
                ))
            ) : (
                linkRepo && <ProjectLink repo={linkRepo} />
            )}
            {linkRepoBK && <ProjectLink repo={linkRepoBK} />}
        </div>
    );
};

export default ProjectLinks;