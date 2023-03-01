import React from "react";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer--social-media">
                <p>
                    Feel free to contact me if you have any questions or follow
                    me here : 
                </p>
                <div className="footer--social-media__icons">
                    <a
                        href="https://github.com/karafaze"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="ri-github-fill"></i> GitHub 
                    </a>
                    <a
                        href="https://www.linkedin.com/in/fazli-carrat/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="ri-linkedin-fill"></i> LinkedIn
                    </a>
                </div>
            </div>
            <div className="footer--back-to-top">
                <i className="ri-arrow-up-circle-fill"></i>
                <a href="#navbar">Back to top</a>
            </div>
        </footer>
    );
}
