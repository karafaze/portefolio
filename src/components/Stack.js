import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNode, faJs, faSass, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';


export default function Stack(props){
    const stackObject = {
        React: faReact,
        ExpressJS: faNode,
        Sass: faSass,
        Javascript: faJs,
        HTML: faHtml5,
        CSS: faCss3
    }
    const stack = stackObject[props?.stack]
    return (
        <React.Fragment>
            <FontAwesomeIcon className="card--stack__icon" icon={stack}/>
        </React.Fragment>
    )
}