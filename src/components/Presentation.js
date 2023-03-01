import React from "react";
import SectionContainer from "./SectionContainer";

export default function Presentation() {
    return (
        <SectionContainer title={"About me"} id="aboutme">
            <section className="presentation">
                <div className="presentation--block">
                    <div className="presentation--block__year">
                        <span>2021</span>
                    </div>
                    <div className="presentation--block__content">
                        <p>
                            I used to be a sales up until august 2021, then I
                            discovered programming with <span className="special-content">Python</span>
                        </p>
                        <p>
                            <span className="special-content">Panda</span>, <span className="special-content">BeautifulSoup</span> and a few automation scripts later I became interested
                            in web development (with <span className="special-content">Django</span>) but I quickly
                            realized Javascript was a must-go here.
                        </p>
                    </div>
                </div>
                <div className="presentation--block">
                    <div className="presentation--block__year">
                        <span>2022</span>
                    </div>
                    <div className="presentation--block__content">
                        <p>
                            I enrolled with OpenClassrooms on a 7-month
                            course to learn how to create websites using{" "}
                            <span className="special-content">
                                Javascript,
                            </span>{" "}
                            <span className="special-content">
                                React
                            </span> and{" "}
                            <span className="special-content">
                                NodeJS.
                            </span>
                        </p>
                    </div>
                </div>
                <div className="presentation--block">
                    <div className="presentation--block__year">
                        <span>2023</span>
                    </div>
                    <div className="presentation--block__content">
                        <p>
                            Currently looking for a junior position as a Web Developer. 
                            May it be on the <span className="special-content">Front</span> or <span className="special-content">Back</span> end
                        </p>
                        <p>In the meantime, I'm developping web applications such as listed in the <a href="#projects">projects section</a></p>
                    </div>
                </div>
            </section>
        </SectionContainer>
    );
}


{/* <p className="presentation--content">
Highly methodical web developer with competencies in both
Front and Back End. I enjoy creating beautiful web apps with
clean code and user friendly interfaces.
</p> */}