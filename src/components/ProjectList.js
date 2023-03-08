import React, { useState } from "react";
import projectData from "../projectData.json";
import Project from "./Project";
import SectionContainer from "./SectionContainer";

export default function ProjectList() {
    const [numDisplayed, setNumDisplayed] = useState(3);
    const maxListLength = projectData.length;

    const projects = projectData.slice(0, numDisplayed).map((project) => {
        return <Project key={project.id} data={project} />;
    });

    const loadMore = () => {
        setNumDisplayed(prevNum => prevNum + 2)
    };

    const loadLess = () => {
        setNumDisplayed(prevNum => {
            return prevNum === 4 ? 3 : prevNum - 2
        })
        const lastElement = document.querySelector('#last-element');
        lastElement.scrollIntoView({behavior: 'smooth'})
    };

    return (
        <SectionContainer title="Projects" id="projects">
            <article className="card--container">
                {projects}
                <div id="last-element"></div>
            </article>
            <div className="load-project">
                {
                    projects.length <= 3 ? null : (
                        <div 
                            className="load-project--btn"
                            onClick={loadLess}
                        >
                                
                            <i className="ri-subtract-line"></i>
                            <button className="load-project--btn__less">
                                Load less
                            </button>
                        </div>
                    )
                }
                {
                    projects.length === maxListLength ? null : (
                        <div 
                            className="load-project--btn"
                            onClick={loadMore}
                        >
                            <i className="ri-add-line"></i>
                            <button className="load-project--btn__more">
                                Load more
                            </button>
                        </div>
                    )
                }
            </div>
        </SectionContainer>
    );
}
