import React from "react";
import projectData from "../projectData.json";
import Project from "./Project";

export default function ProjectList() {
    const projects = projectData.map((project) => {
        return <Project key={project.id} data={project} />;
    });

    return <section id="project-list" className="card--container">{projects}</section>;
}
