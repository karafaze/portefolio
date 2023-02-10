import React from "react";
import Stack from "../components/Stack";
import { nanoid } from "nanoid";

export default function Project(props) {
    const [showFace, setShowFace] = React.useState(true);
    const project = props.data;
    const stackList = project.stack.map((tech) => {
        return <Stack key={nanoid()} stack={tech} />;
    });

    function handleClick() {
        setShowFace((prevState) => !prevState);
    }

    return (
        <div className="card">
            <div onClick={handleClick} className="card--top">
                <h2 className="card--title">{project.name}</h2>
            </div>
            <div className="card--body">
                {showFace ? (
                    <div className="card--body__front">
                        <p className="card--description">
                            {project.description}
                        </p>
                        <div className="card--stack">{stackList}</div>
                    </div>
                ) : (
                    <div className="card--body__back">
                        <p className="card--link__text">Want to see more ?</p>
                        <a className="card--link" href={project.link} target="_blank" rel="noreferrer">
                            See GitHub
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
