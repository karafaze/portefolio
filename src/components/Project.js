import React from "react";
import Stack from "../components/Stack";
import { nanoid } from "nanoid";

export default function Project(props) {
    const project = props.data;
    const stackList = project.stack.map((tech) => {
        return <Stack key={nanoid()} stack={tech} />;
    });

    return (
        <div className="card">
            <div className="card--top">
                <h2 className="card--top__title">{project.name}</h2>
            </div>
            <div className="card--body">
                <p className="card--body__description">{project.description}</p>
                <div className="card--body__stack">{stackList}</div>
            </div>
            <div className="card--bottom">
                <a
                    className="card--bottom__link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub code<i className="ri-external-link-line"></i>
                </a>
                {project.live_site ? (
                    <a
                        className="card--bottom__link"
                        href={project.live_site}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Live version <i className="ri-external-link-line"></i>
                    </a>
                ) : null}
            </div>
        </div>
    );
}
