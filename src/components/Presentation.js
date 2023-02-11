import React from "react";

export default function Presentation() {
    return (
        <React.Fragment>
            <div className="presentation--container">
                <p className="presentation--content">
                    I used to be a sale, then I discovered programming with <span className="presentation--content__special">Python</span>.
                </p>
                <p className="presentation--content">
                    A few automation scripts later, I dived into webscrapping
                    and Panda to try and play with scrapped data. That's when I
                    became interested in web programming (with Django) but I
                    quickly realized Javascript was a must-go here.{" "}
                </p>
                <p className="presentation--content">
                    In 2022, I enrolled with OpenClassrooms on a 7-month course
                    to learn how to create websites using <span className="presentation--content__special">React and NodeJS</span>.
                </p>
                <p className="presentation--content">
                    Highly methodical web developer with competencies in both
                    Front and Back End. I enjoy creating beautiful web apps with
                    clean code and user friendly interfaces.
                </p>
            </div>
        </React.Fragment>
    );
}
