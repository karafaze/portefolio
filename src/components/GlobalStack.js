import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNode, faJs, faSass } from '@fortawesome/free-brands-svg-icons';

export default function GlobalStack() {
    return (
        <React.Fragment>
            <div className="stack">
                <FontAwesomeIcon className="stack--icon" icon={faJs}/>
                <FontAwesomeIcon className="stack--icon" icon={faReact}/>
                <FontAwesomeIcon className="stack--icon" icon={faNode}/>
                <FontAwesomeIcon className="stack--icon" icon={faSass}/>
            </div>
        </React.Fragment>
    );
}