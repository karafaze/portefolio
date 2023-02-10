import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
    return (
        <footer className="footer">
            <p>Let's stay in touch : </p>
            <div className="footer--icon__container">
                <a
                    href="https://github.com/karafaze"
                    target="_blank"
                    rel="noreferrer"
                >
                    Github
                </a>
                <FontAwesomeIcon className="footer--icon" icon={faGithub} />
            </div>
            <div className="footer--icon__container">
                <a
                    href="https://www.linkedin.com/in/fazli-carrat/"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>
                <FontAwesomeIcon className="footer--icon" icon={faLinkedin} />
            </div>
        </footer>
    );
}
