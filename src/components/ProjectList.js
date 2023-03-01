import React from "react";
import projectData from "../projectData.json";
import Project from "./Project";
import SectionContainer from "./SectionContainer";

export default function ProjectList() {
    const projects = projectData.map((project) => {
        return <Project key={project.id} data={project} />;
    });

    return (
        <SectionContainer title="Projects" id="projects">
            <article className="card--container">{projects}</article>
        </SectionContainer>    
    );
}
