import React, { useState } from "react";

export default function SectionContainer(props) {
    const [show, setShow] = useState(false);
    const toggleShow = () => {
        setShow(prevShow => !prevShow)
    }

    const chevronIcon = show ? (
        <i className="ri-arrow-up-s-line"></i>
    ) : (
        <i className="ri-arrow-down-s-line"></i>
    );

    return (
        <section className="section-wrapper" id={props.id}>
            <div className="section-wrapper--top" onClick={toggleShow}>
                <h2 className="section-wrapper--title">{props.title}</h2>
                <div className="section-wrapper--icon">{chevronIcon}</div>
            </div>
            {
                show ? (
                    <div className="section-wrapper__content">
                        {props.children}
                    </div>
                ) : null
            }

        </section>
    );
}
